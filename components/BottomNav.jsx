import React from "react";
import './InstaUI.css'

const BottomNav = ({ setPage }) => (
  <div className="bottom-nav">
    <span onClick={() => setPage("feed")}>🏠</span>
    <span onClick={() => setPage("analytics")}>📊</span>
    <span onClick={() => setPage("profile")}>👤</span>
  </div>
);

export default BottomNav;
