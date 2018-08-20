import React from 'react';
import { startLogin } from '../actions/auth';
import { connect } from 'react-redux';

export const Login = (props) =>{
    return(
        <div className="box-layout">
        <div className="box-layout__box">
        <h1 className='box-layout__title'>JST Permits</h1>
        <p>It's time to get your data under control</p>
        <button className='button' onClick={props.startLogin}>Login with Google</button>
        </div>
        
        </div>
    )
}

const mapDispatchToProps = (dispatch)=>({
    startLogin: ()=> dispatch(startLogin())
})

export default connect(undefined,mapDispatchToProps)(Login)