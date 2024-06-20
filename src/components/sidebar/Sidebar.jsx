import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ReactDash</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <span>Users</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Products</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
};

export default Sidebar;
