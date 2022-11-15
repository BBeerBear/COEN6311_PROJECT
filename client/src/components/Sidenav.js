import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Sidenav extends Component {
  renderContent() {
    // console.log(this.props.auth.name);
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default: {
        return [
          <li>
            <div class='user-view'>
              <div class='background   pink lighten-3'>
                {/* <img src={this.auth.picture} /> */}
              </div>
              <a href='#!user'>
                <img class='circle' src={this.props.auth.picture} />
              </a>
              <a href='#!name'>
                <span class='white-text name'>{this.props.auth.name}</span>
              </a>
              <a href='#!email'>
                <span class='white-text email'>{this.props.auth.email}</span>
              </a>
            </div>
          </li>,
          <li>
            <Link to='/profile/me'>My profile</Link>
          </li>,
          <li>
            <Link to='/profile/me'>Recommended Users</Link>
          </li>,
        ];
      }
    }
  }
  render() {
    return (
      <>
        <ul id='sidebar-1' class='sidenav sidenav-fixed'>
          {this.renderContent()}
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
