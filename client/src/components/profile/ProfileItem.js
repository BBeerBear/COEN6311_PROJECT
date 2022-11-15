import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Profile extends Component {
  render() {
    return <></>;
  }
}

//destruct state
function mapStateToProps({ profile }) {
  return { profile };
}
export default connect(mapStateToProps, actions)(Profile);
