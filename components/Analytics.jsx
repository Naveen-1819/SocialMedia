import React from 'react';


import './InstaUI.css'



const Analytics = () => {
  const views = localStorage.getItem("views") || 0;
  const clicks = localStorage.getItem("clicks") || 0;

  return (
    <div className="analytics">
      <h3>Post Analytics</h3>
      <p>👀 Views: {views}</p>
      <p>🖱 Clicks: {clicks}</p>
    </div>
  );
};

export default Analytics;
