import React from "react";
import { Link } from "react-router-dom";

function Usercreate() {
 return (
  <>
   <div>
    <h1 className="h3 mb-2 text-gray-800">Tables</h1>
    <p className="mb-4">
     DataTables is a third party plugin that is used to generate the demo table
     below. For more information about DataTables, please visit the{" "}
     <Link to="https://datatables.net">official DataTables documentation</Link>.
    </p>
   </div>
   <div className="card shadow mb-4">
    <div className="card-header py-3">
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
         <th>Position</th>
         <th>Office</th>
         <th>Age</th>
         <th>Start date</th>
         <th>Action</th>
        </tr>
       </thead>
       <tfoot>
        <tr>
         <th>Name</th>
         <th>Position</th>
         <th>Office</th>
         <th>Age</th>
         <th>Start date</th>
         <th>Action</th>
        </tr>
       </tfoot>
       <tbody>
        <tr>
         <td>Tiger Nixon</td>
         <td>System Architect</td>
         <td>Edinburgh</td>
         <td>61</td>
         <td>2011/04/25</td>
         <td>
          <Link to="/user-edit/1">Edit</Link>
         </td>
        </tr>
        <tr>
         <td>Tiger Nixon</td>
         <td>System Architect</td>
         <td>Edinburgh</td>
         <td>61</td>
         <td>2011/04/25</td>
         <td>
          <Link to="/user-edit/2">Edit</Link>
         </td>
        </tr>
        <tr>
         <td>Tiger Nixon</td>
         <td>System Architect</td>
         <td>Edinburgh</td>
         <td>61</td>
         <td>2011/04/25</td>
         <td>
          <Link to="/user-edit/3">Edit</Link>
         </td>
        </tr>
       </tbody>
      </table>
     </div>
    </div>
   </div>
  </>
 );
}

export default Usercreate;
