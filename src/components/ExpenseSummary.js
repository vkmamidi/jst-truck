import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectNumber from '../selectors/expenses-total'

export class ExpenseSummary extends React.Component{

  state = {
    text:'',
    msg:'',
    attachment:[],
    truck:this.props.expenses.map((expense)=>parseInt(expense.numberoftrucks,10))
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
      text:this.state.text,
      // file:this.state.attachment
    }).then(function (response) {
    })
    .catch(function (error) {
      console.log(error.response);
    });
  }

  onAttachmentChange = (e)=>{
    const file = e.target.files[0]
    console.log(file) 
    var reader = new FileReader()
    reader.onload = async(event)=>{
      var text = await reader.result
      console.log(text)
      this.setState(()=>({attachment:text}))
    }
    reader.readAsBinaryString(file)
    
  }

  sum=(total,num)=>{
    return total + num
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
        <h3>Number of Trucks:{this.state.truck.length > 1 ? this.state.truck.reduce((total,num)=>total + num): 0}       Number of Companies:{this.props.numofcompanies}</h3>

        <p>{this.state.msg}</p>
        </div>
        </div>
    )}
}

const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters),
      number:selectNumber(state.expenses),
      numofcompanies:state.expenses.length
    };
  };

  export default connect(mapStateToProps)(ExpenseSummary);

  // <input type='file' onChange={this.onAttachmentChange} multiple/> 