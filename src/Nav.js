import React from "react";
import "./Nav.css";

export default function Nav(props) {
  const { searchTerm, setSearchTerm } = props;


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="nav-container">
      <div>
        <a href="https://blogai.streamlit.app/" target="_blank" rel="noopener noreferrer">
          <button className="bot-btn">Chat Bot</button>
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          value={searchTerm}
          placeholder="Search here"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <p>Recent posts</p>
    </div>
  );
}
