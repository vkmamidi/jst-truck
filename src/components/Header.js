import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header className='header'>
  <div className='content-container'>
  <div className='header__content'>
    <NavLink className="header__title" to="/dashboard">
    <h1>JST TRUCK PERMITS</h1>
    </NavLink>
    <button className="button button__logout" onClick={props.startLogout}>Logout</button>
    </div>
    </div>
  
    </header>
);

const mapDispatchToProps = (dispatch)=>({
  startLogout: ()=> dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header);

// <NavLink to="/create" activeClassName="is-active">Create Details</NavLink>