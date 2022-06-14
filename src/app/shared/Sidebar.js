import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: '/apps', state: 'appsMenuOpen' },
      { path: '/basic-ui', state: 'basicUiMenuOpen' },
      { path: '/organization', state: 'formElementsMenuOpen' },
      { path: '/department', state: 'departmentMenuOpen' },
      { path: '/client', state: 'clientPagesMenuOpen' },
      { path: '/user', state: 'userPagesMenuOpen' },
      { path: '/role', state: 'rolePagesMenuOpen' },
      { path: '/agent', state: 'agentPagesMenuOpen' },
      { path: '/agentshift', state: 'agentshiftPagesMenuOpen' },
      { path: '/group', state: 'groupPagesMenuOpen' },
      { path: '/language', state: 'languagePagesMenuOpen' },
      { path: '/question', state: 'questionPagesMenuOpen' },
      { path: '/facebooksetting', state: 'facebooksettingPagesMenuOpen' },
      { path: '/whatsappsetting', state: 'whatsappsettingPagesMenuOpen' },
      { path: '/conversation', state: 'conversationMenuOpen' },
     
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true })
      }
    }));

  }
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          {/* <a className="sidebar-brand brand-logo" href="index.html"><img src={require("../../assets/images/logo.svg")} alt="logo" /></a> */}
          <h2 className='logo' style={{color:"Yellow",fontSize:"40px",paddingLeft:"50px", fontStyle:"oblique"}} >Keachat</h2>
          {/* <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src={require("../../assets/images/logo-mini.svg")} alt="logo" /></a> */}
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile not-navigation-link">
            {/* <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                  <h2>SIDEBAR</h2>
                    <div className="profile-image"> */}
                      {/* <img className="img-xs rounded-circle" src={require("../../assets/images/faces/face8.jpg")} alt="profile" /> */}
                      
                      {/* <div className="dot-indicator bg-success"></div> */}

                     
                    {/* </div>
                    <div className="text-wrapper"> */}
                      {/* <p className="profile-name">Allen Moreno</p>
                      <p className="designation">Premium user</p> */}
                    {/* </div>

                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center" href="!#" onClick={evt => evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt => evt.preventDefault()}>
                    <Trans>Manage Accounts</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt => evt.preventDefault()}>
                    <Trans>Change Password</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt => evt.preventDefault()}>
                    <Trans>Check Inbox</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt => evt.preventDefault()}>
                    <Trans>Sign Out</Trans>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div> */}
          </li>
           
          <li className={this.isPathActive('/organization') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('tablesMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-table-large menu-icon"></i>
              <Link to="/organization/OrganizationList"><span className="menu-title"><Trans>Organization</Trans></span></Link>
              <i className="menu-arrow"></i>
            </div>

          </li>
          

          <li className={this.isPathActive('/department') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('tablesMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-table-large menu-icon"></i>
              <Link to="/department/DepartmentList"><span className="menu-title"><Trans>Department</Trans></span></Link>
              <i className="menu-arrow"></i>
            </div>

          </li>

          
          <li className={this.isPathActive('/client') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.clientPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('clientPagesMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <Link to = "/client/ClientList"><span className="menu-title"><Trans>Client</Trans></span></Link>
              <i className="menu-arrow"></i>
            </div>
          </li>

          <li className={this.isPathActive('/group') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.clientPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('groupPagesMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <Link to = "/group/GroupList"><span className="menu-title"><Trans>Group</Trans></span></Link>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={this.isPathActive('/agentshift') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.agentshiftPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('agentshiftPagesMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <Link to="/agentshift/AgentShiftList"><span className="menu-title"><Trans>Agent Shift</Trans></span></Link>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={this.isPathActive('/agent') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.agentMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('agentMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <Link to ="/agent/AgentList"><span className="menu-title"><Trans>Agent</Trans></span></Link>
              <i className="menu-arrow"></i>
            </div>
          </li>
          <li className={this.isPathActive('/language') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('tablesMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-table-large menu-icon"></i>
              <Link to="/Language/LanguageList"><span className="menu-title"><Trans>Agent Language</Trans></span></Link>
              <i className="menu-arrow"></i>
            </div>

          </li>
          
          <li className={this.isPathActive('/question') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.questionMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('questionMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-table-large menu-icon"></i>
              <Link to="/question/QuestionList"><span className="menu-title"><Trans>Question</Trans></span></Link>
              <i className="menu-arrow"></i>
            </div>

          </li>
          <li className={this.isPathActive('/role') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.rolePagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('rolePagesMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <Link to="/role/RoleList"><span className="menu-title"><Trans>Role</Trans></span></Link>
              <i className="menu-arrow"></i>
            </div>
          </li>

          <li className={this.isPathActive('/user') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('userPagesMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <Link to="/user/UserList"><span className="menu-title"><Trans>User</Trans></span></Link>
              <i className="menu-arrow"></i>
            </div>
          </li>

          <li className={this.isPathActive('/conversation') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.conversationMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('conversationMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-table-large menu-icon"></i>
              <Link to="/Conversation/conversation"><span className="menu-title"><Trans>Conversation</Trans></span></Link>
              <i className="menu-arrow"></i>
            </div>

          </li>
          <li className={this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
            </Link>
          </li>

          {/* <li className={this.isPathActive('/general-pages') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/general-pages/LandingPage">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title"><Trans>Landing Page</Trans></span>
            </Link>
          </li> */}

          
          <li className={this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item'}>
            
            <Collapse in={this.state.basicUiMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link'} to="/basic-ui/buttons"><Trans>Buttons</Trans></Link></li>
                <li className="nav-item"> <Link className={this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link'} to="/basic-ui/dropdowns"><Trans>Dropdowns</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);