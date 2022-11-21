import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';

class ProfileItem extends Component {
  render() {
    const user = this.props.user;
    return (
      <li class='collection-item avatar'>
        <img src={user.picture} alt='' class='circle' />
        <span class='title'>{user.name}</span>
        <p>
          {user.email}
          <br />
          <Link
            to='/profile/others'
            onClick={() => this.props.getUserById(user._id)}
          >
            View details
          </Link>
        </p>
        <a href='#!' class='secondary-content'>
          <i class='material-icons'> add_circle_outline</i>
        </a>
      </li>
    );
  }
}

export default connect(null, actions)(ProfileItem);
