import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
        <h1>Details</h1>
        <table>
        <tbody>
        {props.expenses.map((expense)=>{
            return (
                
                <ExpenseListItem key ={expense.id}  {...expense}/>
                
            )
        })}
        </tbody>
        </table>
      
      
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
