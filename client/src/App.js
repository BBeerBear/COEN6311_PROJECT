import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Landing from './components/Landing';
import ProfileEdit from './components/profile/ProfileEdit';
import Dashboard from './components/dashboard/Dashboard';
import Sidenav from './components/Sidenav';
import Profile from './components/profile/Profile';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div class='row'>
            <div class='col s2'>{/* <Sidenav /> */}</div>
            <div class='col s10'>
              <Header />
              <Route exact path='/' component={Landing} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/profile' component={ProfileEdit} />
              <Route exact path='/profile/me' component={Profile} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
