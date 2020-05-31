import React from "react";
import logo from "../assets/logo.svg";
export default function NavigationBar(props) {
  const { onNavChange } = props;
  return (
    <div className="nav-container">
      <img src={logo} className="app-logo" />

      <nav className="app-nav">
        <button
          className="nav-buttons"
          onClick={() => {
            onNavChange("Home");
          }}
        >
          HOME
        </button>
        <button
          className="nav-buttons"
          onClick={() => {
            onNavChange("About");
          }}
        >
          ABOUT
        </button>
      </nav>
    </div>
  );
}
