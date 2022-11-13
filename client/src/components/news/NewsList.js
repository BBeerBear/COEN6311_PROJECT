import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NotFound from '../layout/NotFound';
import Spinner from '../layout/Spinner';
import NewsItem from './NewsItem';

class NewsList extends Component {
  renderContent() {
    switch (this.props.trends) {
      case null:
        return <Spinner />;
      case false:
        return <NotFound />;
      default: {
        return (
          <div className='container #fce4ec'>
            {this.props.trends.map((trend) => (
              <NewsItem trend={trend} />
            ))}
          </div>
        );
      }
    }
  }
  render() {
    return this.renderContent();
  }
}

//destruct state
function mapStateToProps({ trends }) {
  return { trends };
}

export default connect(mapStateToProps, actions)(NewsList);
