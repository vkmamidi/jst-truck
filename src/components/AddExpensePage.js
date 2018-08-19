import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense, startAddDetails } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // this.props.startAddExpense(expense);
    this.props.startAddDetails(expense)
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Details</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // startAddExpense: (expense) => dispatch(startAddExpense(expense))
  startAddDetails :(detail)=> dispatch(startAddDetails(detail))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
