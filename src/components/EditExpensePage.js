import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditDetail,startRemoveDetail} from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditDetail(this.props.expense.id,expense)
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveDetail({id:this.props.expense.id})
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
      <div className='page-header'>
      <div className="content-container">
      <h1>Update the Information</h1>
      </div>
      </div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <div className='content-container'>
        <button className = 'button__remove button' onClick={this.onRemove}>Remove</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditDetail:(id,detail)=> dispatch(startEditDetail(id,detail)),
  startRemoveDetail:(data)=> dispatch(startRemoveDetail(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
