import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddDetails } from '../actions/expenses';
import {storage} from 'firebase';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddDetails(expense)
    this.props.history.push('/');
    // var myfile = document.getElementById('file-name').files[0]
    // const storageRef = storage.ref();
    // const metadata = {
    //   contentType:myfile.type
    // };
    // storageRef.put(myfile,metadata).then((snapshot)=>{
    //   console.log('uploaded file')
    // })

  };
  render() {
    return (
      <div>
      <div className='page-header'>
      <div className='content-container'>  
      <h1>Carrier Information Sheet</h1>
      </div>  
      </div>
      <ExpenseForm
          authid={this.props.auth}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state)=>({
  auth:state.auth.uid
})

const mapDispatchToProps = (dispatch) => ({
  
  startAddDetails :(detail)=> dispatch(startAddDetails(detail))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensePage);
