import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Sidenav extends Component {
  render() {
    console.log(this.props.auth);
    return (
      <>
        <ul id='sidebar-1' class='sidenav sidenav-fixed'>
          <li>
            <div class='user-view'>
              <div class='background'>
                {/* <img src={this.auth.picture} /> */}
              </div>
              <a href='#!user'>
                <img class='circle' src={this.props.auth.picture} />
              </a>
              <a href='#!name'>
                <span class='white-text name'>John Doe</span>
              </a>
              <a href='#!email'>
                <span class='white-text email'>jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          {/* <li><Link to='/profile/me'>My profile</Link></li> */}
          <li>
            <a href='https://twitter.com/MaterializeCSS' target='_blank'>
              Twitter
            </a>
          </li>
          <li>
            <a
              href='http://next.materializecss.com/getting-started.html'
              target='_blank'
            >
              Docs
            </a>
          </li>
        </ul>
      </>
    );
  }
}

//destruct state
function mapStateToProps({ activity, auth }) {
  return { activity, auth };
}

export default connect(mapStateToProps, actions)(Sidenav);
