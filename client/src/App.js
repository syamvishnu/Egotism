import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Market from "./pages/Market.jsx";
import Message from "./pages/Message.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Payment from "./pages/Payment.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { path: "", element: <Market /> },
        { path: "message", element: <Message /> },
        { path: "payment", element: <Payment /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
