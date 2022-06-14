import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Protected from '../Protected';

import Spinner from '../app/shared/Spinner';
import Conversation from './conversation/Conversation';

// import QuestionEdit from './question/QuestionEdit';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));

const OrganizationAdd = lazy(() => import('./organization/OrganizationAdd'));
const OrganizationList = lazy(() => import('./organization/OrganizationList'));
const OrganizationEdit=lazy(()=>import("./organization/OrganizationEdit"))

const DepartmentAdd = lazy(() => import('./department/DepartmentAdd'));
const DepartmentList = lazy(() => import('./department/DepartmentList'));
const DepartmentEdit = lazy(() => import('./department/DepartmentEdit'));

const ClientAdd = lazy(() => import('./client/ClientAdd'));
const ClientList = lazy(() => import('./client/ClientList'));
const ClientEdit = lazy(() => import('./client/ClientEdit'));

const UserAdd = lazy(() => import('./user/UserAdd'));
const UserList = lazy(() => import('./user/UserList'));
const UserEdit = lazy(() => import('./user/UserEdit'));



const RoleAdd = lazy(() => import('./role/RoleAdd'));
const RoleList = lazy(() => import('./role/RoleList'));
const RoleEdit = lazy(() => import('./role/RoleEdit'));


const AgentAdd = lazy(() => import('./agent/AgentAdd'));
const AgentList = lazy(() => import('./agent/AgentList'));
const AgentEdit = lazy(() => import('./agent/AgentEdit'));

const AgentShiftAdd = lazy(() => import('./agentshift/AgentShiftAdd'));
const AgentShiftList = lazy(() => import('./agentshift/AgentShiftList'));
const AgentShiftEdit = lazy(() => import('./agentshift/AgentShiftEdit'));

const GroupAdd = lazy(() => import('./group/GroupAdd'));
const GroupList = lazy(() => import('./group/GroupList'));
const GroupEdit = lazy(() => import('./group/GroupEdit'));

const LanguageAdd = lazy(() => import('./language/LanguageAdd'));
const LanguageList = lazy(() => import('./language/LanguageList'));
const LanguageEdits = lazy(() => import('./language/LanguageEdits'));


const QuestionAdd = lazy(() => import('./question/QuestionAdd'));
const QuestionList = lazy(() => import('./question/QuestionList'));
const QuestionEdit = lazy(() => import('./question/QuestionEdit'));

const FacebookSetting = lazy(() => import('./facebooksetting/FacebookSetting'));

const WhatsappSetting = lazy(() => import('./whatsappsetting/WhatsappSetting'));

// const Conversation = lazy(() => import('./conversation/Conversation'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./Login'));
// const Register = lazy(() => import('./user-pages/Register'));
// const LandingPage = lazy(() => import("./general-pages/LandingPage"));


export default function AppRoutes()  {
 
    return (
        <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard"><Protected Cmp={ Dashboard } /></Route> 

          <Route path="/basic-ui/buttons"><Protected Cmp={ Buttons } /></Route> 
          <Route path="/basic-ui/dropdowns"><Protected Cmp={ Dropdowns } /></Route> 

          <Route path="/organization/OrganizationAdd">< Protected Cmp={ OrganizationAdd}/></Route>
          <Route path="/organization/OrganizationList">< Protected Cmp={ OrganizationList}/></Route> 
          <Route path="/organization/OrganizationEdit/:id">< Protected Cmp={ OrganizationEdit}/></Route> 

          <Route path="/department/DepartmentAdd"><Protected Cmp={ DepartmentAdd } /></Route> 
          <Route path="/department/DepartmentList" ><Protected Cmp={ DepartmentList } /></Route>
          <Route path="/department/DepartmentEdit/:id">< Protected Cmp={ DepartmentEdit } /></Route>

          <Route path="/client/ClientAdd"><Protected Cmp={ ClientAdd  } /></Route> 
          <Route path="/client/ClientList"><Protected Cmp={ ClientList } /></Route> 
          <Route path="/client/ClientEdit/:id"><Protected Cmp={ ClientEdit } /></Route> 

          <Route path="/user/UserAdd" >< Protected Cmp={UserAdd}/> </Route>
          <Route path="/user/UserList"><Protected Cmp={UserList}/></Route>
          <Route path="/user/UserEdit/:id"><Protected Cmp={UserEdit}/></Route> 

          <Route path="/role/RoleAdd"><Protected Cmp={ RoleAdd  } /></Route> 
          <Route path="/role/RoleList"><Protected Cmp={ RoleList } /></Route> 
          <Route path="/role/RoleEdit/:id"><Protected Cmp={ RoleEdit } /></Route> 

          <Route path="/agent/AgentAdd"><Protected Cmp={ AgentAdd  } /></Route> 
          <Route path="/agent/AgentList"><Protected Cmp={ AgentList } /></Route> 
          <Route path="/agent/AgentEdit/:id"><Protected Cmp={ AgentEdit } /></Route> 

          <Route path="/agentshift/AgentShiftAdd"><Protected Cmp={ AgentShiftAdd  } /></Route> 
          <Route path="/agentshift/AgentShiftList"><Protected Cmp={ AgentShiftList } /></Route> 
          <Route path="/agentshift/AgentShiftEdit/:id"><Protected Cmp={ AgentShiftEdit } /></Route> 

          <Route path="/group/GroupAdd"><Protected Cmp={ GroupAdd  } /></Route> 
          <Route path="/group/GroupList"><Protected Cmp={ GroupList } /></Route> 
          <Route path="/group/GroupEdit/:id"><Protected Cmp={ GroupEdit } /></Route> 

          <Route path="/language/LanguageAdd"><Protected Cmp={ LanguageAdd } /></Route> 
          <Route path="/language/LanguageList"><Protected Cmp={ LanguageList } /></Route> 
          <Route path="/language/LanguageEdits/:id"><Protected Cmp={ LanguageEdits } /></Route> 

          <Route path="/question/QuestionAdd"><Protected Cmp={ QuestionAdd } /></Route> 
          <Route path="/question/QuestionList"><Protected Cmp={ QuestionList } /></Route> 
          <Route path="/question/QuestionEdit/:id"><Protected Cmp={ QuestionEdit } /></Route> 


          {/* <Route path="/facebooksetting/facebooksetting"> <Protected Cmp={ FacebookSetting} /></Route> */}

          <Route path="/whatsappsetting/whatsappsetting"><Protected Cmp={ WhatsappSetting} /></Route> 

          <Route path="/conversation/conversation"> <Protected Cmp={ Conversation } /></Route>
        
          {/* <Route path="/icons/mdi"><Protected Cmp={ Mdi } /></Route>  */}

          {/* <Route path="/charts/chart-js"> <Protected Cmp={ ChartJs } /></Route> */}
          <Route path="/Login" component={Login}/> 
          <Redirect to="/Login" />
        </Switch>
      </Suspense>
    );
  }


//Older Routes
{/* <Route path="/organization/OrganizationAdd" component={OrganizationAdd}/> */}