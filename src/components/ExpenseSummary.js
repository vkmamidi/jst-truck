import React from 'react';
import {Link} from 'react-router-dom';


export const ExpenseSummary = ()=>{
    return(
        <div className='page-header'>
        <div className='content-container'>
        <div className='page-header__actions'>
        <Link className='button' to="/create">Add Details</Link>
        </div>
        </div>
        </div>
    )
}