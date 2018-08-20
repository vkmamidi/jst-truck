import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddDetails } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddDetails(expense)
    this.props.history.push('/');
  };
  render() {
    return (
      <div className='content-container'>
        <h1>Carrier Information Sheet</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  
  startAddDetails :(detail)=> dispatch(startAddDetails(detail))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
