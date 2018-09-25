import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';

export class ExpenseSummary extends React.Component{

  state = {
    text:'',
    msg:''
  }

    onNumberClick = async(e)=>{
        e.preventDefault()
        this.setState(()=>({msg:'your messages have been sent'}))
        await axios.post("/sendsms",{
          numbers:this.props.expenses.map((expense)=>expense.phone),
          text:this.state.text
        }).then(function (response) {
          
        })
        .catch(function (error) {
          console.log(error.response);
        });
      }

onEmailClick = async(e)=>{
    e.preventDefault()
    this.setState(()=>({msg:'Your Emails have been sent'}))
    await axios.post("/send",{
      email:this.props.expenses.map((expense)=>expense.email),
      text:this.state.text
    }).then(function (response) {
    })
    .catch(function (error) {
      console.log(error.response);
    });
  }

  onTextChange = (e)=>{
    const text = e.target.value
    this.setState(()=>({text}))
  }
    render(){
    return(
        <div className='page-header'>
        <div className='content-container'>
        <div className='head'>
        
        <Link className='button button__link' to="/create">Add Details</Link>
        <div className = 'head__buttons'>
        <textarea className='text-box' value={this.state.text} onChange ={this.onTextChange}/>
        <button className='button button__sms' onClick={this.onNumberClick}>Send SMS </button>
        <button className = 'button' onClick={this.onEmailClick}>Send Email</button>
        </div>
        </div>
        {this.state.msg}
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