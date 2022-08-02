import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Protected from '../Protected';

import Spinner from '../app/shared/Spinner';

// import PrivateRoute from './PrivateRoute';




const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const OrganizationAdd = lazy(() => import('./organization/OrganizationAdd'));
const OrganizationList = lazy(() => import('./organization/OrganizationList'));
const OrganizationEdit=lazy(()=>import("./organization/OrganizationEdit"))

const DepartmentAdd = lazy(() => import('./department/DepartmentAdd'));
const DepartmentList = lazy(() => import('./department/DepartmentList'));
const DepartmentEdit = lazy(() => import('./department/DepartmentEdit'));

const ClientAdd = lazy(() => import('./client/ClientAdd'));
const ClientList = lazy(() => import('./client/ClientList'));
const ClientEdit = lazy(() => import('./client/ClientEdit'));

const AgentAdd = lazy(() => import('./agent/AgentAdd'));
const AgentList = lazy(() => import('./agent/AgentList'));
const AgentEdit = lazy(() => import('./agent/AgentEdit'));

const AgentShiftAdd = lazy(() => import('./agentshift/AgentShiftAdd'));
const AgentShiftList = lazy(() => import('./agentshift/AgentShiftList'));
const AgentShiftEdit = lazy(() => import('./agentshift/AgentShiftEdit'));

const GroupAdd = lazy(() => import('./group/GroupAdd'));
const GroupList = lazy(() => import('./group/GroupList'));
const GroupEdit = lazy(() => import('./group/GroupEdit'));

const QuestionAdd = lazy(() => import('./question/QuestionAdd'));
const QuestionList = lazy(() => import('./question/QuestionList'));
const QuestionEdit = lazy(() => import('./question/QuestionEdit'));

const WhatsappSettingAdd = lazy(() => import('./whatsappsetting/WhatsappSettingAdd'));
const WhatsappSettingEdit = lazy(() => import('./whatsappsetting/WhatsappSettingEdit'));

const Conversationchat = lazy(() => import('./conversation/Conversationchat'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./Login'));


export default function AppRoutes()  {
 
    return (
        <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard"><Protected Cmp={ Dashboard } /></Route> 
 
          {/* <PrivateRoute exact path="/dashboard"><Protected Cmp={ Dashboard } /></PrivateRoute>  */}


          {/* <Route path="/basic-ui/buttons"><Protected Cmp={ Buttons } /></Route> 
          <Route path="/basic-ui/dropdowns"><Protected Cmp={ Dropdowns } /></Route>  */}

          <Route path="/organization/OrganizationAdd">< Protected Cmp={ OrganizationAdd}/></Route>
          <Route path="/organization/OrganizationList">< Protected Cmp={ OrganizationList}/></Route> 
          <Route path="/organization/OrganizationEdit/:id">< Protected Cmp={ OrganizationEdit}/></Route> 

          <Route path="/department/DepartmentAdd"><Protected Cmp={ DepartmentAdd } /></Route> 
          <Route path="/department/DepartmentList" ><Protected Cmp={ DepartmentList } /></Route>
          <Route path="/department/DepartmentEdit/:id">< Protected Cmp={ DepartmentEdit } /></Route>

          <Route path="/client/ClientAdd"><Protected Cmp={ ClientAdd  } /></Route> 
          <Route path="/client/ClientList"><Protected Cmp={ ClientList } /></Route> 
          <Route path="/client/ClientEdit/:id"><Protected Cmp={ ClientEdit } /></Route> 

          <Route path="/agent/AgentAdd"><Protected Cmp={ AgentAdd  } /></Route> 
          <Route path="/agent/AgentList"><Protected Cmp={ AgentList } /></Route> 
          <Route path="/agent/AgentEdit/:id"><Protected Cmp={ AgentEdit } /></Route> 

          <Route path="/agentshift/AgentShiftAdd"><Protected Cmp={ AgentShiftAdd  } /></Route> 
          <Route path="/agentshift/AgentShiftList"><Protected Cmp={ AgentShiftList } /></Route> 
          <Route path="/agentshift/AgentShiftEdit/:id"><Protected Cmp={ AgentShiftEdit } /></Route> 

          <Route path="/group/GroupAdd"><Protected Cmp={ GroupAdd  } /></Route> 
          <Route path="/group/GroupList"><Protected Cmp={ GroupList } /></Route> 
          <Route path="/group/GroupEdit/:id"><Protected Cmp={ GroupEdit } /></Route> 

        
          <Route path="/question/QuestionAdd"><Protected Cmp={ QuestionAdd } /></Route> 
          <Route path="/question/QuestionList"><Protected Cmp={ QuestionList } /></Route> 
          <Route path="/question/QuestionEdit/:id"><Protected Cmp={ QuestionEdit } /></Route> 

          <Route path="/whatsappsetting/whatsappsettingAdd"><Protected Cmp={ WhatsappSettingAdd} /></Route> 
          <Route path="/whatsappsetting/whatsappsettingEdit/:id"><Protected Cmp={ WhatsappSettingEdit} /></Route> 

          <Route path="/conversation/conversationchat"> <Protected Cmp={ Conversationchat } /></Route>
        
          <Route path="/Login" component={Login}/> 
          <Redirect to="/Login" />
        </Switch>
        </Suspense> 
    );
  }


//Older Routes
{/* <Route path="/organization/OrganizationAdd" component={OrganizationAdd}/> */}