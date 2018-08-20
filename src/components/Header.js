import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header>
    <h1>Carrier Information Sheet</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Details</NavLink>
    <button onClick={props.startLogout}>LogOut</button>
  </header>
);

const mapDispatchToProps = (dispatch)=>({
  startLogout: ()=> dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header);
