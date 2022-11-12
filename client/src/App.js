import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Landing from './components/Landing';
import Profile from './components/profile/profile';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      // <div className='container'>
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/profile' component={Profile} />
        </BrowserRouter>
      </div>
      // </div>
    );
  }
}

export default connect(null, actions)(App);
