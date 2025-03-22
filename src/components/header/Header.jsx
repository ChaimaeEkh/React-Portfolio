import React, { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const closeIcon = "/fonts/close.png";
  const moonIcon = "/fonts/moon.png";
  const menuIcon = "/fonts/menu.png";
  
  
  return (
    <header className="flex">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="menu"
        aria-label="Open menu"
      >
        <img src={menuIcon} alt="Menu" />
      </button>
     
      <nav>
        <ul className="flex">
          <li><a href="#">About</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Speaking</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
     
      <button aria-label="Toggle dark mode">
        <img src={moonIcon} alt="Dark mode" />
      </button>
     
      {showModal && (
        <div className="fixed">
          <ul className="modal border">
            <li>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                aria-label="Close menu"
              >
                <img src={closeIcon} alt="Close" />
              </button>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Speaking</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}