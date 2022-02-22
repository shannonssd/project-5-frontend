import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">User Auth</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/hmd-list">Hand Me Down List</Link>
        </li>
        <li>
          <Link to="/chat-all">Chat</Link>
        </li>
        <li>
          <Link to="/interest-group-list" />
        </li>

      </ul>
    </nav>
  );
}

export default NavBar;
