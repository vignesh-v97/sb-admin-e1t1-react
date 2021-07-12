// import logo from './logo.svg';
import "./App.css";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./Users";
import Usercreate from "./Usercreate";
import UserEdit from "./UserEdit";
import { UserProvider } from "./userContext";

function App() {
 return (
  <UserProvider>
   <Router>
    <div id="wrapper">
     <Sidebar />
     <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
       <Topbar />
       <div className="container-fluid">
        <Switch>
         <Route path="/" component={Dashboard} exact={true}></Route>
         <Route path="/user" component={Users} exact={true}></Route>
         <Route path="/user-create" component={Usercreate} exact={true}></Route>
         <Route path="/user-edit/:id" component={UserEdit} exact={true}></Route>
        </Switch>
       </div>
      </div>
     </div>
    </div>
   </Router>
  </UserProvider>
 );
}

export default App;
