import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Sidenav extends Component {
  componentDidMount() {}
  renderContent() {
    const current_user = this.props.user.user;
    switch (this.props.user.user) {
      case null:
        return;
      case false:
        return;
      default: {
        return [
          <li key={1}>
            <div class='user-view'>
              <div class='background   pink lighten-3'></div>
              <a href='#!user'>
                <img class='circle' src={current_user.picture} />
              </a>
              <a href='#!name'>
                <span class='white-text name'>{current_user.name}</span>
              </a>
              <a href='#!email'>
                <span class='white-text email'>{current_user.email}</span>
              </a>
            </div>
          </li>,
          <li key={2}>
            <Link to='/profile/me'>My profile</Link>
          </li>,
          <li key={3}>
            <Link onClick={() => this.props.getUsers()} to='/profile/others'>
              Recommended Users
            </Link>
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
function mapStateToProps({ auth, user }) {
  return { auth, user };
}

export default connect(mapStateToProps, actions)(Sidenav);
