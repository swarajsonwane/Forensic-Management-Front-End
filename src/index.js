import React from 'react';
import './index.css';
import App from './App';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import {Provider } from 'react-redux';
import store from "./store";
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/common/PrivateRoute';
import CreateProfile from './components/create-profile/CreateProfile';
import { Container } from '@material-ui/core';
import Navbar from './components/dashboard/Navbar';
import SupervisorDetails from './components/Supervisor/SupervisorDetails';
import OfficerForm from './components/Officer/OfficerForm';
import OfficerDashboard from './components/Officer/DashBoard/dashboard/OfficerDashboard';
import OfficerDetails from './components/Officer/OfficerDetails';
import ViewReports from './components/Officer/reports/ViewReports';
import Reports from './components/Officer/reports/Reports';

function Home ()
{
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/create-profile" component={CreateProfile} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/supervisor-details">
              <Navbar />
              <Container>
                <SupervisorDetails />
              </Container>
            </Route>
            <Route exact path="/officer-details">
              <Navbar />
              <Container>
                <OfficerDetails />
              </Container>
            </Route>
            <Route exact path="/reports">
              <Navbar />
              <Container>
                <Reports />
              </Container>
            </Route>
            <Route exact path="/officer-dashboard" component={OfficerDashboard} />
            <Route exact path="/officerform" component={OfficerForm} />
            <Route path='/view-reports/:id' exact component={ViewReports} />

          </Switch>
        </Router>
      </Provider>
    );
  
};



ReactDOM.render(
  <React.StrictMode>
   <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

