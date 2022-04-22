import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
import Conversation from './conversation/Conversation';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));

const BasicElements = lazy(() => import('./organization/OrganizationAdd'));
const Organizationlist = lazy(() => import('./organization/Organizationlist'));

const DepartmentAdd = lazy(() => import('./department/DepartmentAdd'));
const DepartmentList = lazy(() => import('./department/DepartmentList'));


const ClientAdd = lazy(() => import('./client/ClientAdd'));
const ClientList = lazy(() => import('./client/ClientList'));

const UserAdd = lazy(() => import('./user/UserAdd'));
const UserList = lazy(() => import('./user/UserList'));

const AgentAdd = lazy(() => import('./agent/AgentAdd'));
const AgentList = lazy(() => import('./agent/AgentList'));

const AgentShiftAdd = lazy(() => import('./agentshift/AgentShiftAdd'));
const AgentShiftList = lazy(() => import('./agentshift/AgentShiftList'));

const GroupAdd = lazy(() => import('./group/GroupAdd'));
const GroupList = lazy(() => import('./group/GroupList'));

const Language = lazy(() => import('./language/Language'));

const Question = lazy(() => import('./question/Question'));

const FacebookSetting = lazy(() => import('./facebooksetting/FacebookSetting'));

const WhatsappSetting = lazy(() => import('./whatsappsetting/WhatsappSetting'));

// const Conversation = lazy(() => import('./conversation/Conversation'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />

          <Route path="/organization/OrganizationAdd" component={ BasicElements } />
          <Route path="/organization/organization-list" component={ Organizationlist } />

          <Route path="/department/departmentAdd" component={ DepartmentAdd } />
          <Route path="/department/department-list" component={ DepartmentList } />

          <Route path="/client/ClientAdd" component={ ClientAdd  } />
          <Route path="/client/clientList" component={ ClientList } />

          <Route path="/user/UserAdd" component={ UserAdd  } />
          <Route path="/user/UserList" component={ UserList } />

          <Route path="/agent/AgentAdd" component={ AgentAdd  } />
          <Route path="/agent/AgentList" component={ AgentList } />

          <Route path="/agentshift/AgentShiftAdd" component={ AgentShiftAdd  } />
          <Route path="/agentshift/AgentShiftList" component={ AgentShiftList } />

          <Route path="/group/GroupAdd" component={ GroupAdd  } />
          <Route path="/group/GroupList" component={ GroupList } />

          <Route path="/language/language" component={ Language } />

          <Route path="/question/question" component={ Question } />

          <Route path="/facebooksetting/facebooksetting" component={ FacebookSetting} />

          <Route path="/whatsappsetting/whatsappsetting" component={ WhatsappSetting} />

          <Route path="/conversation/conversation" component={ Conversation } />
        
          <Route path="/icons/mdi" component={ Mdi } />

          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;