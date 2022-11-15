import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ProfileList extends Component {
  render() {
    console.log('profile');
    return <>hello</>;
  }
}

//destruct state
function mapStateToProps({ profile }) {
  return { profile };
}
export default connect(mapStateToProps, actions)(ProfileList);
