import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const Nav = () => {

  return (
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-md-0">


        {/* <li className="nav-item active">
    <Link to="/admin" className="nav-link" >Add Client</Link>
</li> */}
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Client"
          menuVariant="dark"
        >
          <NavDropdown.Item >    <Link to="/app" className="nav-link" >App</Link></NavDropdown.Item>
          {/* <NavDropdown.Item ><Link to="/updateclient" className="nav-link" >Update Client</Link></NavDropdown.Item> */}
          <NavDropdown.Item >    <Link to="/signup" className="nav-link" >Signup</Link></NavDropdown.Item>
          <NavDropdown.Item >    <Link to="/login" className="nav-link" >Login</Link></NavDropdown.Item>

          <NavDropdown.Item >    <Link to="/tenant" className="nav-link" >Tenant</Link></NavDropdown.Item>
          <NavDropdown.Item >    <Link to="/awslogin" className="nav-link" >AWSLogin</Link></NavDropdown.Item>

          {/* <NavDropdown.Item >   <a href={"https://platformdomain.auth.ca-central-1.amazoncognito.com/login?client_id=6ao3t42tqdtgrp56ojvauitm25&response_type=code&scope=email+openid+profile&redirect_uri=http://localhost:3001/apps"}>LinkedIn handle</a> </NavDropdown.Item> */}
          <NavDropdown.Divider />
          {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>


{/* 
        <li style={{ backgroundColor: 'firebrick' }} className="nav-item active">
          <Link to="/login" className="nav-link" >Logout</Link>
        </li> */}


      </ul>

    </div>
  );
};
