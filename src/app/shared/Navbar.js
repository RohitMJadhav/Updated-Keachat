import React, { Component,useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Trans } from "react-i18next";
import { Link, useHistory, withRouter } from "react-router-dom";
import Axios from "axios";
// import AuthContext from "../AuthContext";

function Navbar() {
  function toggleOffcanvas() {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  }

  function toggleRightSidebar() {
    document.querySelector(".right-sidebar").classList.toggle("open");
  }

//  let {logoutUser}=useContext(AuthContext)

  let history = useHistory();
  const LogoutData = () => {
    
    var role = JSON.parse(localStorage.getItem("user_info")).userinfo.role;
   
    if (role == "Agent") {
      var data = {
        user_id: JSON.parse(localStorage.getItem("user_info")).userinfo
          .agent_id.$oid,
        role: JSON.parse(localStorage.getItem("user_info")).userinfo.role,
      };
    } else {
      var data = {
        user_id: JSON.parse(localStorage.getItem("user_info")).userinfo._id
          .$oid,
        role: JSON.parse(localStorage.getItem("user_info")).userinfo.role,
      };
    }

    Axios.post(process.env.REACT_APP_API_URL + "auth/logout", data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("user_info")).access_token,
      },
    })
   .then((response)=>{ localStorage.clear("user_info");
   history.push("./Login");})
   
  };

  return (
    <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <a
          className="navbar-brand brand-logo-mini align-self-center d-lg-none"
          href="!#"
          onClick={(evt) => evt.preventDefault()}
        >
          <img src={require("../../assets/images/logo-mini.svg")} alt="logo" />
        </a>
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          onClick={() => document.body.classList.toggle("sidebar-icon-only")}
        >
          <i className="mdi mdi-menu"></i>
        </button>

        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item  nav-profile border-0">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                <img
                  className="img-xs rounded-circle"
                  src={require("../../assets/images/faces-clipart/pic-4.png")}
                  alt="Profile"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                {/* <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0 mt-2" onClick={evt =>evt.preventDefault()}>
                    <Trans>Manage Accounts</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                    <Trans>Change Password</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center border-0" onClick={evt =>evt.preventDefault()}>
                    <Trans>Check Inbox</Trans>
                  </Dropdown.Item> */}

                {/* <Dropdown.Item onClick={LogoutData}> */}
                  <Dropdown.Item >

                  <Trans>
                    <button className="btn btn-primary" onClick={()=>LogoutData()}>Sign Out</button>
                  </Trans>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          onClick={toggleOffcanvas}
        >
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
