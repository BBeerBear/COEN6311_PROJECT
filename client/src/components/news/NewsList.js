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
                {this.props.trends.map((trend) => {
                  return (
                    <div
                      className='col-md-4 col-sm-6 col-xs-12'
                      key={trend.newsUrl}
                    >
                      <NewsItem trend={trend} />
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <div className='container-fluid page-button my-4 mx-2'>
              <button
                disabled={this.trends.page <= 1}
                className='btn-sm btn btn-color mx-5 '
                onClick={this.handlePrevious}
              >
                &larr; Previous
              </button>
              <div className='page-count'>{this.trends.page}</div>
              <button
                disabled={
                  !(this.trends.page + 1 <= Math.ceil(this.trends.length / 12))
                }
                className='btn-sm btn btn-color mx-5'
                // onClick={this.handleNext}
              >
                Next &rarr;
              </button>
            </div> */}
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
