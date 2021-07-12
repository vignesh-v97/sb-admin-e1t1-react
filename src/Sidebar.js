import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";

function Sidebar() {
 const data = useContext(UserContext);
 return (
  <>
   <ul
    className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
   >
    {/* Sidebar - Brand */}
    <a
     className="sidebar-brand d-flex align-items-center justify-content-center"
     href="index.html"
    >
     <div className="sidebar-brand-icon rotate-n-15">
      <i className="fas fa-laugh-wink" />
     </div>
     <div className="mx-3 sidebar-brand-text">
      SB Admin <sup>2</sup>
     </div>
    </a>
    {/* Divider */}
    <hr className="my-0 sidebar-divider" />
    {/* Nav Item - Charts */}
    <li className="nav-item">
     <Link to="/" className="nav-link">
      <i className="fas fa-fw fa-chart-area" />
      <span>Dashboard</span>
     </Link>
    </li>
    {/* Nav Item - Tables */}
    <li className="nav-item">
     <Link to="/user" className="nav-link">
      <i className="fas fa-fw fa-table" />
      <span>Users</span>
     </Link>
    </li>
    {/* Divider */}
    <hr className="sidebar-divider d-none d-md-block" />
    {/* Sidebar Toggler (Sidebar) */}
    <div className="text-center d-none d-md-inline">
     <button className="border-0 rounded-circle" id="sidebarToggle" />
    </div>
    {/* Sidebar Message */}
    <div className="sidebar-card d-none d-lg-flex">
     <img
      className="mb-2 sidebar-card-illustration"
      src="img/undraw_rocket.svg"
      alt="..."
     />
     <p className="mb-2 text-center">
      <strong>SB Admin Pro</strong> is packed with premium features, components,
      and more!
     </p>
     <a
      className="btn btn-success btn-sm"
      href="https://startbootstrap.com/theme/sb-admin-pro"
     >
      Upgrade to Pro!
     </a>
    </div>
   </ul>
  </>
 );
}

export default Sidebar;
