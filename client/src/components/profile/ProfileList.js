import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Spinner from '../layout/Spinner';
import NotFound from '../layout/NotFound';
import ProfileItem from './ProfileItem';

class ProfileList extends Component {
  renderContent() {
    console.log(this.props.users);
    switch (this.props.users) {
      case null:
        return <h1>null</h1>;
      case false:
        return <h1>false</h1>;
      default: {
        return (
          <ul class='collection'>
            {this.props.users.map((user) => {
              return <ProfileItem user={user} key={user._id} />;
            })}
          </ul>
        );
      }
    }
  }
  render() {
    return this.renderContent();
  }
}

//destruct state
function mapStateToProps({ users, profile }) {
  return { users, profile };
}
export default connect(mapStateToProps, actions)(ProfileList);
