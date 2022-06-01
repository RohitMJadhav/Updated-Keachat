import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
import Conversation from './conversation/Conversation';
import LanguageEdit from './language/LanguageEdits';
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
const LandingPage = lazy(() => import("./general-pages/LandingPage"));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />

          <Route path="/organization/OrganizationAdd" component={ OrganizationAdd } />
          <Route path="/organization/organizationList" component={ OrganizationList } />
          <Route path="/organization/organizationEdit/:id" component={ OrganizationEdit } />

          <Route path="/department/departmentAdd" component={ DepartmentAdd } />
          <Route path="/department/department-list" component={ DepartmentList } />
          <Route path="/department/DepartmentEdit/:id" component={ DepartmentEdit } />

          <Route path="/client/ClientAdd" component={ ClientAdd  } />
          <Route path="/client/ClientList" component={ ClientList } />
          <Route path="/client/ClientEdit/:id" component={ ClientEdit } />

          <Route path="/user/UserAdd" component={ UserAdd  } />
          <Route path="/user/UserList" component={ UserList } />
          <Route path="/user/UserEdit/:id" component={ UserEdit } />

          <Route path="/role/RoleAdd" component={ RoleAdd  } />
          <Route path="/role/RoleList" component={ RoleList } />
          <Route path="/role/RoleEdit/:id" component={ RoleEdit } />

          <Route path="/agent/AgentAdd" component={ AgentAdd  } />
          <Route path="/agent/AgentList" component={ AgentList } />
          <Route path="/agent/AgentEdit/:id" component={ AgentEdit } />

          <Route path="/agentshift/AgentShiftAdd" component={ AgentShiftAdd  } />
          <Route path="/agentshift/AgentShiftList" component={ AgentShiftList } />
          <Route path="/agentshift/AgentShiftEdit/:id" component={ AgentShiftEdit } />

          <Route path="/group/GroupAdd" component={ GroupAdd  } />
          <Route path="/group/GroupList" component={ GroupList } />
          <Route path="/group/GroupEdit/:id" component={ GroupEdit } />


          <Route path="/language/LanguageAdd" component={ LanguageAdd } />
          <Route path="/language/LanguageList" component={ LanguageList } />
          <Route path="/language/LanguageEdits/:id" component={ LanguageEdits } />

          <Route path="/question/QuestionAdd" component={ QuestionAdd } />
          <Route path="/question/QuestionList" component={ QuestionList } />
          <Route path="/question/QuestionEdit/:id" component={ QuestionEdit } />


          <Route path="/facebooksetting/facebooksetting" component={ FacebookSetting} />

          <Route path="/whatsappsetting/whatsappsetting" component={ WhatsappSetting} />

          <Route path="/conversation/conversation" component={ Conversation } />
        
          <Route path="/icons/mdi" component={ Mdi } />

          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/Login" component={ Login } />
          {/* <Route path="/user-pages/register" component={ Register } /> */}
          <Route path="/general-pages/LandingPage" component={ LandingPage } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          {/* <Redirect to="/dashboard" /> */}
          <Redirect to="/Login" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;