import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import logo from '../../images/logo.svg';
import Tooltip from '@mui/material/Tooltip';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import CorporateFareTwoToneIcon from '@mui/icons-material/CorporateFareTwoTone';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import ApartmentTwoToneIcon from '@mui/icons-material/ApartmentTwoTone';

class Sidebar extends Component {
  

state={}




















constructor(props) {
  super(props);
  if(JSON.parse(localStorage.getItem("user_info"))){
    this.role = JSON.parse(localStorage.getItem("user_info")).userinfo.role
  } else{
    this.role=null
  }
}






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
      { path: '/organization/organizationlist', state: 'organizationMenuOpen' },
      { path: '/department/departmentlist', state: 'departmentMenuOpen' },
      { path: '/client/clientlist', state: 'clientPagesMenuOpen' },  
      { path: '/agent/agentlist', state: 'agentPagesMenuOpen' },
      { path: '/agentshift/agentshiftlist', state: 'agentshiftPagesMenuOpen' },
      { path: '/conversation/conversationchat', state: 'conversationMenuOpen' },
     
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
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center" style={{backgroundColor:"#c5d0d0"}}>
          <a className="sidebar-brand brand-logo" href="index.html"><img src={logo} alt="My logo" /></a>
        </div>
        <ul className="nav">
        
       
          { (()=>{
            if(this.role == 'Superadmin'){
              let index=0;
              
           return([ 
            <li key={++index} className={this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item'}>
              <Link className="nav-link" to="/dashboard">
             {/* <i className="mdi mdi-television menu-icon"></i> */}
             <Tooltip title = "Dashboard Icon"><DashboardIcon fontSize="small"/></Tooltip><span className="menu-title" style={{paddingLeft:"10px",fontFamily:"cursive",width:"250px"}}><Trans>Dashboard</Trans></span>
           </Link>
           </li>
         ,<li key={++index} className={this.isPathActive('/organization/organizationlist') ? 'nav-item active' : 'nav-item'}>
              <div className={this.state.organizationMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('organizationMenuOpen')} data-toggle="collapse">
                <Link to="/organization/organizationlist">
                <Tooltip title = "Organization Icon"><ApartmentTwoToneIcon fontSize="small" style={{color:"white"}}/></Tooltip>
                <span className="menu-title" style={{paddingLeft:"10px",fontFamily:"cursive",width:"250px"}} ><Trans>Organization</Trans></span></Link> 
                <i className="menu-arrow"></i>
            </div>

          </li>
            ])

          } else if(this.role =="Agent"){
            let index=0;
          
            return([
          <li key={++index} className={this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/dashboard">
            <Tooltip title = "Dashboard Icon"><DashboardIcon fontSize="small"/></Tooltip>
            <span className="menu-title" style={{paddingLeft:"10px",fontFamily:"cursive",width:"250px"}}><Trans>Dashboard</Trans></span>
          </Link>
        </li>   ,
        <li key={++index} className={this.isPathActive('/conversationchat') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.conversationMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('conversationMenuOpen')} data-toggle="collapse">
              <Link to="/conversation/conversationchat"><Tooltip title = "Conversation Icon"><WhatsappOutlinedIcon fontSize="small" style={{color:"green"}}/></Tooltip><span className="menu-title" style={{paddingLeft:"10px",fontFamily:"cursive",width:"250px"}}><Trans>Conversation</Trans></span></Link>
              <i className="menu-arrow"></i>
            </div>

          </li>

          ])
        }

          else {
            let index=0;
          return([
            <li key={++index} className={this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/dashboard">
              <Tooltip title = "Dashboard Icon"><DashboardIcon fontSize="small"/></Tooltip>
              <span className="menu-title" style={{paddingLeft:"10px",fontFamily:"cursive",width:"250px"}}><Trans>Dashboard</Trans></span>
            </Link>
            </li>,
          <li key={++index} className={this.isPathActive('/department/departmentlist') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.departmentMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('departmentMenuOpen')} data-toggle="collapse">
              <Link to="/department/departmentlist">
              <Tooltip title = "Department Icon"><CorporateFareTwoToneIcon fontSize="small" style={{color:"white"}}/></Tooltip>
                <span className="menu-title" style={{paddingLeft:"10px",fontFamily:"cursive",width:"250px"}}><Trans>Department</Trans></span></Link>
            </div>
          </li>,
          <li key={++index} className={this.isPathActive('/client/clientlist') ? 'nav-item active' : 'nav-item'}>
          <div className={this.state.clientPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('clientPagesMenuOpen')} data-toggle="collapse">
            <Link to = "/client/clientlist">
            <Tooltip title = "Client Icon"><GroupsTwoToneIcon fontSize="small" style={{color:"white"}}/></Tooltip><span className="menu-title" style={{paddingLeft:"10px",fontFamily:"cursive",width:"250px"}}><Trans>Client</Trans></span></Link>
          </div>
        </li>,
          
         <li key={++index} className={this.isPathActive('/agentshift/agentshiftlist') ? 'nav-item active' : 'nav-item'}>
         <div className={this.state.agentshiftPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('agentshiftPagesMenuOpen')} data-toggle="collapse">
           <Link to="/agentshift/agentshiftlist">
           <Tooltip title = "Agent Shift Icon"><AccessTimeFilledRoundedIcon fontSize="small" style={{color:"white"}}/></Tooltip>
            <span className="menu-title" style={{paddingLeft:"10px",fontFamily:"cursive",width:"250px"}}><Trans>Agent Shift</Trans></span></Link>
         </div>
       </li>,
       <li key={++index} className={this.isPathActive('/agent/agentlist') ? 'nav-item active' : 'nav-item'}>
       <div className={this.state.agentPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('agentPagesMenuOpen')} data-toggle="collapse">
         <Link to ="/agent/agentlist">
         <Tooltip title = "Agent Icon"><SupportAgentRoundedIcon fontSize="small" style={{color:"white"}} /></Tooltip>
          <span className="menu-title" style={{paddingLeft:"10px",fontFamily:"cursive",width:"250px"}}><Trans>Agent</Trans></span></Link>
         <i className="menu-arrow"></i>
       </div>
      </li>,
     
          
          ]
          )}
                
          })()} 
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

