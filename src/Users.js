import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";

function Users() {
 const data = useContext(UserContext);
 return (
  <>
   <div className="mb-4 d-sm-flex align-items-center justify-content-between">
    <h1 className="mb-0 text-gray-800 h3">Users Listing</h1>
    <Link
     to="/user-create"
     className="shadow-sm d-none d-sm-inline-block btn btn-sm btn-primary"
    >
     <i className="fas fa-download fa-sm text-white-50" /> create User
    </Link>
   </div>
   <div>
    <h1 className="mb-2 text-gray-800 h3">Tables</h1>
    <p className="mb-4">
     DataTables is a third party plugin that is used to generate the demo table
     below. For more information about DataTables, please visit the{" "}
     <Link to="https://datatables.net">official DataTables documentation</Link>.
    </p>
   </div>
   <div className="mb-4 shadow card">
    <div className="py-3 card-header">
     <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div className="card-body">
     <div className="table-responsive">
      <table
       className="table table-bordered"
       id="dataTable"
       width="100%"
       cellSpacing={0}
      >
       <thead>
        <tr>
         <th>Name</th>
         <th>User Name</th>
         <th>Email</th>
         <th>Mobile</th>
         <th>Action</th>
        </tr>
       </thead>
       <tfoot>
        <tr>
         <th>Name</th>
         <th>User Name</th>
         <th>Email</th>
         <th>Mobile</th>
         <th>Action</th>
        </tr>
       </tfoot>
       <tbody>
        {data.userData.map((user) => {
         return (
          <tr>
           <td>{user.name}</td>
           <td>{user.username}</td>
           <td>{user.email}</td>
           <td>{user.mobile}</td>
           <td>
            <Link to="/user-edit/1">Edit</Link>
           </td>
          </tr>
         );
        })}
       </tbody>
      </table>
     </div>
    </div>
   </div>
  </>
 );
}

export default Users;
