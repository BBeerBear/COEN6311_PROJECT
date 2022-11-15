import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Profile extends Component {
  render() {
    return (
      <div class='container'>
        hello
        <div class='col s12 m8 offset-m2 l6 offset-l3'>
          <div class='card-panel grey lighten-5 z-depth-1'>
            <div class='row valign-wrapper'>
              <div class='col s2'>
                <img
                  src='http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg'
                  alt=''
                  class='circle responsive-img'
                />
              </div>
              <div class='col s10'>
                <span class='black-text'>
                  This is a square image. Add the "circle" class to it to make
                  it appear circular.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//destruct state
function mapStateToProps({ profile }) {
  return { profile };
}
export default connect(mapStateToProps, actions)(Profile);
