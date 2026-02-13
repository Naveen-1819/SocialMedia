import React from "react";
import './Sidebar.css'
const Sidebar = () => {
  return (
    <aside className="ig-sidebar">
      <h2 className="logo">Instagram</h2>

      <nav className="sidebar-nav">
        <div className="nav-item">🏠 Home</div>
        <div className="nav-item">🔍 Search</div>
        <div className="nav-item">🎬 Reels</div>
        <div className="nav-item">💬 Messages</div>
        <div className="nav-item">❤️ Notifications</div>
        <div className="nav-item">➕ Create</div>
        <div className="nav-item">👤 Profile</div>
      </nav>

      <div className="sidebar-footer">
        <span>☰ More</span>
      </div>
    </aside>
  );
};

export default Sidebar;
