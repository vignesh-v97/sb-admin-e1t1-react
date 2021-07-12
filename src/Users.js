import React from "react";
import { Link } from "react-router-dom";

function Users() {
 return (
  <>
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Users</h1>
    <Link
     to="/user-create"
     className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
    >
     <i className="fas fa-download fa-sm text-white-50" /> create User
    </Link>
   </div>
  </>
 );
}

export default Users;
