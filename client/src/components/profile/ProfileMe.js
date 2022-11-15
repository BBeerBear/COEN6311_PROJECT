import React, { Component } from 'react';
import "./ProfileStyle.css";
import { connect } from 'react-redux';
// import avatar from "../images/image-rita.png";
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
          <div className="card-container">
            <header>
              <a href='#!user'>
                <img class='circle' src={this.props.auth.picture} />
              </a>
            </header>
            <h1 className="UserCard">
            </h1>
            {/* <h2 className="normal-text">{props.city}</h2> */}
            <div className="User">
              <div className="UserName">
                <h1 className="smaller-text">Name:</h1>
                <a href='#!name'>
                  <span class='name'>{this.props.auth.name}</span>
                </a>
              </div>
              <div className="Email">
                <h1 className="smaller-text">Email:
                <a href='#!email'>
                  <span class='email'>{this.props.auth.email}</span>
                </a>
                </h1>
              </div>
              <div className="Categories">
                <h1 className="smaller-text">Liked Categories:
                <a href='#!email'>
                  <span class='email'>{this.props.profile.profile[0].preferredCategories}</span>
                </a>
                </h1>
              </div>
            </div>
          </div>
    );
  }
}
    renderCategories() {
      if (this.props.profile.profile[0].preferredCategories) {
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

