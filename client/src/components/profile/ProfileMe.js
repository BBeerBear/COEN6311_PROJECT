import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Spinner from '../layout/Spinner';
import NotFound from '../layout/NotFound';

class ProfileMe extends Component {
  renderContent() {
    // console.log('profile', this.props.profile.profile);
    switch (
      this.props.profile.profile &&
      this.props.auth &&
      this.props.profile
    ) {
      case null:
        return <Spinner />;
      case false:
        return <NotFound />;
      default:
        return (
          <div className='container right'>
            <div id='profile-card' class='card' style={{ width: '50%' }}>
              <div class='card-image waves-effect waves-block waves-light '>
                <img
                  class='activator '
                  src='https://cdn.windowsreport.com/wp-content/uploads/2022/05/Coconut-and-Azuki-in-Casual-Wear.jpg'
                  alt='user background'
                  height={250}
                />
              </div>
              <div class='card-content'>
                <img
                  src={this.props.auth.picture}
                  alt=''
                  class='circle responsive-img activator card-profile-image'
                />
                <a class='btn-floating activator btn-move-up waves-effect waves-light darken-2 right'>
                  <i class='mdi-action-account-circle'></i>
                </a>

                <span class='card-title activator grey-text text-darken-4'>
                  {this.props.auth.name}
                </span>
                {/* <p>
                  <i class='mdi-action-perm-identity cyan-text text-darken-2'></i>{' '}
                  Project Manager
                </p>
                <p>
                  <i class='mdi-action-perm-phone-msg cyan-text text-darken-2'></i> +1
                  (612) 222 8989
                </p> */}
                <p>
                  <i class='mdi-communication-email cyan-text text-darken-2'></i>{' '}
                  {this.props.auth.email}
                </p>
                <p>
                  <i class='mdi-communication-email cyan-text text-darken-2'></i>{' '}
                  {this.props.profile.profile.country}
                </p>
                <p>
                  <br />
                  LIKED TOPIC
                  <i class='mdi-communication-email cyan-text text-darken-2'></i>
                  {this.renderCategories()}
                </p>
              </div>
            </div>
          </div>
        );
    }
  }

  renderCategories() {
    if (this.props.profile.profile.preferredCategories) {
      return this.props.profile.profile.preferredCategories.map((e) => (
        <div>{e}</div>
      ));
    }
  }

  render() {
    return this.renderContent();
  }
}
function mapStateToProps({ auth, profile }) {
  return { auth, profile };
}
export default connect(mapStateToProps, actions)(ProfileMe);
