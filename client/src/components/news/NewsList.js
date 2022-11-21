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
          <>
            <div className='container my-3 '>
              <div className='row'>
                {this.props.trends.map((trend, i) => {
                  return (
                    <div className='col-md-4 col-sm-6 col-xs-12' key={i}>
                      <NewsItem trend={trend} />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
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
