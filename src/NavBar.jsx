import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import logo from './logo.png';
import Time from './Time';
import AccessTimeIcon from '@material-ui/icons/AccessTime';



const NavBar = () => {
    return(
        <>
        
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto">

            
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
  <NavLink  className="navbar-brand" to="/">
  <img src={logo} height="50" width="130" alt="logo" />
    </NavLink>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName="menu_active" className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link " aria-current="page" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="menu_active" className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <button style={{color:"white",border:"1px solid #d9534f"}} className=" btn-danger btn-get-started scrollto ml-2"><AccessTimeIcon/> <Time/></button>
        </li>
      
      
      </ul>
      
    </div>
  </div>
</nav>
    </div>
    </div> 
    </div>
        </>
    )
}

export default NavBar;
