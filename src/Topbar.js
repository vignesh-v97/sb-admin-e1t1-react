import React, { useContext } from "react";
import UserContext from "./userContext";

function Topbar() {
 let data = useContext(UserContext);
 console.log(data);
 return (
  <>
   {/* Topbar */}
   <nav className="mb-4 bg-white shadow navbar navbar-expand navbar-light topbar static-top">
    {/* Sidebar Toggle (Topbar) */}
    <button
     id="sidebarToggleTop"
     className="mr-3 btn btn-link d-md-none rounded-circle"
    >
     <i className="fa fa-bars" />
    </button>
    {/* Topbar Search */}
    <form className="my-2 mr-auto d-none d-sm-inline-block form-inline ml-md-3 my-md-0 mw-100 navbar-search">
     <div className="input-group">
      <input
       type="text"
       className="border-0 form-control bg-light small"
       placeholder="Search for..."
       aria-label="Search"
       aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
       <button className="btn btn-primary" type="button">
        <i className="fas fa-search fa-sm" />
       </button>
      </div>
     </div>
    </form>
    {/* Topbar Navbar */}
    <ul className="ml-auto navbar-nav">
     {/* Nav Item - Search Dropdown (Visible Only XS) */}
     <li className="nav-item dropdown no-arrow d-sm-none">
      <a
       className="nav-link dropdown-toggle"
       href="!#"
       id="searchDropdown"
       role="button"
       data-toggle="dropdown"
       aria-haspopup="true"
       aria-expanded="false"
      >
       <i className="fas fa-search fa-fw" />
      </a>
      {/* Dropdown - Messages */}
      <div
       className="p-3 shadow dropdown-menu dropdown-menu-right animated--grow-in"
       aria-labelledby="searchDropdown"
      >
       <form className="mr-auto form-inline w-100 navbar-search">
        <div className="input-group">
         <input
          type="text"
          className="border-0 form-control bg-light small"
          placeholder="Search for..."
          aria-label="Search"
          aria-describedby="basic-addon2"
         />
         <div className="input-group-append">
          <button className="btn btn-primary" type="button">
           <i className="fas fa-search fa-sm" />
          </button>
         </div>
        </div>
       </form>
      </div>
     </li>
     {/* Nav Item - Alerts */}
     <li className="mx-1 nav-item dropdown no-arrow">
      <a
       className="nav-link dropdown-toggle"
       href="!#"
       id="alertsDropdown"
       role="button"
       data-toggle="dropdown"
       aria-haspopup="true"
       aria-expanded="false"
      >
       <i className="fas fa-bell fa-fw" />
       {/* Counter - Alerts */}
       <span className="badge badge-danger badge-counter">3+</span>
      </a>
      {/* Dropdown - Alerts */}
      <div
       className="shadow dropdown-list dropdown-menu dropdown-menu-right animated--grow-in"
       aria-labelledby="alertsDropdown"
      >
       <h6 className="dropdown-header">Alerts Center</h6>
       <a className="dropdown-item d-flex align-items-center" href="!#">
        <div className="mr-3">
         <div className="icon-circle bg-primary">
          <i className="text-white fas fa-file-alt" />
         </div>
        </div>
        <div>
         <div className="text-gray-500 small">December 12, 2019</div>
         <span className="font-weight-bold">
          A new monthly report is ready to download!
         </span>
        </div>
       </a>
       <a className="dropdown-item d-flex align-items-center" href="!#">
        <div className="mr-3">
         <div className="icon-circle bg-success">
          <i className="text-white fas fa-donate" />
         </div>
        </div>
        <div>
         <div className="text-gray-500 small">December 7, 2019</div>
         $290.29 has been deposited into your account!
        </div>
       </a>
       <a className="dropdown-item d-flex align-items-center" href="!#">
        <div className="mr-3">
         <div className="icon-circle bg-warning">
          <i className="text-white fas fa-exclamation-triangle" />
         </div>
        </div>
        <div>
         <div className="text-gray-500 small">December 2, 2019</div>
         Spending Alert: We've noticed unusually high spending for your account.
        </div>
       </a>
       <a className="text-center text-gray-500 dropdown-item small" href="!#">
        Show All Alerts
       </a>
      </div>
     </li>
     {/* Nav Item - Messages */}
     <li className="mx-1 nav-item dropdown no-arrow">
      <a
       className="nav-link dropdown-toggle"
       href="!#"
       id="messagesDropdown"
       role="button"
       data-toggle="dropdown"
       aria-haspopup="true"
       aria-expanded="false"
      >
       <i className="fas fa-envelope fa-fw" />
       {/* Counter - Messages */}
       <span className="badge badge-danger badge-counter">7</span>
      </a>
      {/* Dropdown - Messages */}
      <div
       className="shadow dropdown-list dropdown-menu dropdown-menu-right animated--grow-in"
       aria-labelledby="messagesDropdown"
      >
       <h6 className="dropdown-header">Message Center</h6>
       <a className="dropdown-item d-flex align-items-center" href="!#">
        <div className="mr-3 dropdown-list-image">
         <img
          className="rounded-circle"
          src="img/undraw_profile_1.svg"
          alt="..."
         />
         <div className="status-indicator bg-success" />
        </div>
        <div className="font-weight-bold">
         <div className="text-truncate">
          Hi there! I am wondering if you can help me with a problem I've been
          having.
         </div>
         <div className="text-gray-500 small">Emily Fowler · 58m</div>
        </div>
       </a>
       <a className="dropdown-item d-flex align-items-center" href="!#">
        <div className="mr-3 dropdown-list-image">
         <img
          className="rounded-circle"
          src="img/undraw_profile_2.svg"
          alt="..."
         />
         <div className="status-indicator" />
        </div>
        <div>
         <div className="text-truncate">
          I have the photos that you ordered last month, how would you like them
          sent to you?
         </div>
         <div className="text-gray-500 small">Jae Chun · 1d</div>
        </div>
       </a>
       <a className="dropdown-item d-flex align-items-center" href="!#">
        <div className="mr-3 dropdown-list-image">
         <img
          className="rounded-circle"
          src="img/undraw_profile_3.svg"
          alt="..."
         />
         <div className="status-indicator bg-warning" />
        </div>
        <div>
         <div className="text-truncate">
          Last month's report looks great, I am very happy with the progress so
          far, keep up the good work!
         </div>
         <div className="text-gray-500 small">Morgan Alvarez · 2d</div>
        </div>
       </a>
       <a className="dropdown-item d-flex align-items-center" href="!#">
        <div className="mr-3 dropdown-list-image">
         <img
          className="rounded-circle"
          src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
          alt="..."
         />
         <div className="status-indicator bg-success" />
        </div>
        <div>
         <div className="text-truncate">
          Am I a good boy? The reason I ask is because someone told me that
          people say this to all dogs, even if they aren't good...
         </div>
         <div className="text-gray-500 small">Chicken the Dog · 2w</div>
        </div>
       </a>
       <a className="text-center text-gray-500 dropdown-item small" href="!#">
        Read More Messages
       </a>
      </div>
     </li>
     <div className="topbar-divider d-none d-sm-block" />
     {/* Nav Item - User Information */}
     <li className="nav-item dropdown no-arrow">
      <a
       className="nav-link dropdown-toggle"
       href="!#"
       id="userDropdown"
       role="button"
       data-toggle="dropdown"
       aria-haspopup="true"
       aria-expanded="false"
      >
       <span className="mr-2 text-gray-600 d-none d-lg-inline small">
        Douglas McGee
       </span>
       <img
        className="img-profile rounded-circle"
        src="img/undraw_profile.svg"
        alt=""
       />
      </a>
      {/* Dropdown - User Information */}
      <div
       className="shadow dropdown-menu dropdown-menu-right animated--grow-in"
       aria-labelledby="userDropdown"
      >
       <a className="dropdown-item" href="!#">
        <i className="mr-2 text-gray-400 fas fa-user fa-sm fa-fw" />
        Profile
       </a>
       <a className="dropdown-item" href="!#">
        <i className="mr-2 text-gray-400 fas fa-cogs fa-sm fa-fw" />
        Settings
       </a>
       <a className="dropdown-item" href="!#">
        <i className="mr-2 text-gray-400 fas fa-list fa-sm fa-fw" />
        Activity Log
       </a>
       <div className="dropdown-divider" />
       <a
        className="dropdown-item"
        href="!#"
        data-toggle="modal"
        data-target="#logoutModal"
       >
        <i className="mr-2 text-gray-400 fas fa-sign-out-alt fa-sm fa-fw" />
        Logout
       </a>
      </div>
     </li>
    </ul>
   </nav>
   {/* End of Topbar */}
  </>
 );
}

export default Topbar;
