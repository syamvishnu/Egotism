import React, { useState } from "react";
import "./message.css";

function Message() {
  const [username, setUsername] = useState("");
  const [command, setCommand] = useState("");
  const [commands, setCommands] = useState([]);

  const handleAddCommand = () => {
    if (username.trim() && command.trim()) {
      setCommands([
        ...commands,
        { username, command, time: new Date().toLocaleString() },
      ]);
      setCommand("");
    }
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
        <button onClick={handleAddCommand}>Add Comment</button>
      </div>
      <ul className="command-list">
        {commands.map((cmd, index) => (
          <li key={index} className="comment-item">
            <strong>{cmd.username}</strong>{" "}
            <span className="time">{cmd.time}</span>
            <p>{cmd.command}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Message;
