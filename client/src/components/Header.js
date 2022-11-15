import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './button.css';
import './landing.css';
import logo from '../img/logo.jpg';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key='1'>
            <a href='/auth/google'>Login with Google</a>
          </li>,
          <li key='2'>
            <a href='/auth/facebook'>Login with Facebook</a>
          </li>,

        ];
      default: {
        return [
          <li key='3'>
            <Link to='/dashboard'>
              <a href='#'>Home</a>
            </Link>
          </li>,
          <li key='3'>
            <Link to='/profile'>
              <a href='#'>Profile</a>
            </Link>
          </li>,
          <li key='2'>
            <a href='/api/logout'>Logout</a>
          </li>,
        ];
      }
    }
  }
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <img
            src={logo}
            alt='logo'
            className='circle'
            style={{ width: '50px', style: 'inline', margin: '10px' }}
          />
          <Link
            to={this.props.auth ? '/dashboard' : '/'}
            className='brand-logo'
          >
            BBeerBear News
          </Link>
          <ul className='right'>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

//destruct state
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
