import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Sidenav extends Component {
  render() {
    return <></>;
  }
}

//destruct state
function mapStateToProps({ activity }) {
  return { activity };
}

export default connect(mapStateToProps, actions)(Sidenav);
