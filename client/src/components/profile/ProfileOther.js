import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileOther extends Component {
  componentDidMount() {}
  render() {
    if (!this.props.user.loading) {
      const current_user = this.props.user.otherUser;
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
                src={current_user.picture}
                alt=''
                class='circle responsive-img activator card-profile-image'
              />
              <a class='btn-floating activator btn-move-up waves-effect waves-light darken-2 right'>
                <i class='mdi-action-account-circle'></i>
              </a>

              <span class='card-title activator grey-text text-darken-4'>
                {current_user.name}
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
                {current_user.email}
              </p>
              <p>
                <br />
                Country
                <br />
                <i class='mdi-communication-email cyan-text text-darken-2'></i>{' '}
                {current_user.country}
              </p>
              <p>
                <br />
                LIKED TOPIC
                <i class='mdi-communication-email cyan-text text-darken-2'></i>
                {current_user.preferredCategories.map((e) => (
                  <div>{e}</div>
                ))}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}
function mapStateToProps({ user }) {
  return { user };
}
export default connect(mapStateToProps, actions)(ProfileOther);
