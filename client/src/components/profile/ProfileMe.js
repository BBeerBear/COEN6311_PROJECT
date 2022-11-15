import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ProfileMe extends Component {

  renderContent() {
    // if (this.props.profile && this.props.auth && this.props.profile.profile) {
    // console.log(this.props.profile.profile);
    <div id='profile-card' class='card'>
      <div class='card-image waves-effect waves-block waves-light '>
        <img
          class='activator '
          src='https://cdn.windowsreport.com/wp-content/uploads/2022/05/Coconut-and-Azuki-in-Casual-Wear.jpg'
          alt='user background'
        />
      </div>
      <div class='card-content'>
        <img
          src={this.props.auth.picture}
          alt=''
          class='circle responsive-img activator card-profile-image'
        />
        {/* <a class='btn-floating activator btn-move-up waves-effect waves-light darken-2 right'>
          <i class='mdi-action-account-circle'></i>
        </a> */}

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
        {/* <p>
            <i class='mdi-communication-email cyan-text text-darken-2'></i>{' '}
            {this.props.profile.profile.country}
          </p> */}
      </div>
      {/* <div class='card-reveal'>
        <span class='card-title grey-text text-darken-4'>
          Roger Waters <i class='mdi-navigation-close right'></i>
        </span>
        <p>Here is some more information about this card.</p>
        <p>
          <i class='mdi-action-perm-identity cyan-text text-darken-2'></i>{' '}
          Project Manager
        </p>
        <p>
          <i class='mdi-action-perm-phone-msg cyan-text text-darken-2'></i> +1
          (612) 222 8989
        </p>
        <p>
          <i class='mdi-communication-email cyan-text text-darken-2'></i>{' '}
          {this.props.auth.email}
        </p>
        <p>
          <i class='mdi-social-cake cyan-text text-darken-2'></i> 18th June
          1990
        </p>
        <p>
          <i class='mdi-device-airplanemode-on cyan-text text-darken-2'></i>{' '}
          BAR - AUS
        </p>
      </div> */}
    </div>;
    // } else {
    //   return <></>;
    // }
  }

  render() {
    return this.renderContent();
  }
}
function mapStateToProps({ auth, profile }) {
  return { auth, profile };
}
export default connect(mapStateToProps, actions)(ProfileMe);
