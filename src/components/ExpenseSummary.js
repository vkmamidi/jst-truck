import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';

export class ExpenseSummary extends React.Component{

    onNumberClick = async(e)=>{
        e.preventDefault()
        await axios.post("/sendsms",{
          numbers:this.props.expenses.map((expense)=>expense.phone),
        }).then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.response);
        });
      }

onEmailClick = async(e)=>{
    e.preventDefault()
    await axios.post("/send",{
      email:this.props.expenses.map((expense)=>expense.email),
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
    });
  }
    render(){
    return(
        <div className='page-header'>
        <div className='content-container'>
        <div className='head'>
        
        <Link className='button button__link' to="/create">Add Details</Link>
        <div className = 'head__buttons'>
        <button className='button button__sms' onClick={this.onNumberClick}>Send SMS </button>
        <button className = 'button' onClick={this.onEmailClick}>Send Email</button>
        </div>
        </div>
        </div>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
  };

  export default connect(mapStateToProps)(ExpenseSummary);