import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SavedNews extends Component {
  render() {
    return <div></div>;
  }
}

//destruct state
function mapStateToProps({ activity }) {
  return { activity };
}

export default connect(mapStateToProps, actions)(SavedNews);
