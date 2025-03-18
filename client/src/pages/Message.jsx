import React, { useState, useEffect } from "react";
import "./message.css";

function Message() {
  const [username, setUsername] = useState("");
  const [command, setCommand] = useState("");
  const [commands, setCommands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3001/api/message/get");
      const data = await response.json();
      console.log(data);
      if (data.data) {
        setCommands(data.data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSubmit = async () => {
    const newData = { username, message: command };

    try {
      const response = await fetch("http://127.0.0.1:3001/api/message/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        setCommand("");
        setUsername("");
        fetchMessages();
      }
    } catch (error) {
      console.error("Error submitting message:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const paginateComments = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return commands.slice().reverse().slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(commands.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <h2>Comments</h2>
      <div className="input-container">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
        />
        <textarea
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Write a comment..."
        />
        <button onClick={handleSubmit}>Add Comment</button>
      </div>
      <ul className="command-list">
        {paginateComments().map((cmd, index) => (
          <li key={index} className="comment-item">
            <strong>{cmd.username}</strong>{" "}
            <span className="time">
              {cmd.time ? formatDate(cmd.time) : "Unknown time"}
            </span>
            <p>{cmd.message}</p>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Message;
