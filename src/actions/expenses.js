import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

const addDetails = (detail)=>({
  type:'addDetails',
  detail
})

const startAddDetails = (detailsData={})=>{
  return(dispatch)=>{
      const {name = '', company='DBA', phone = 0, mcnum='',user='',password='', createdAt = 0, address='', email='', notes = '',ssn='',nmwdt='',federalId = '',kyu='', irp='',nyhut = '',usdot = '', origon='',usdotpin = '', canumber = '', ifta='',requester = '', numberoftrucks=''} = detailsData;
      const detail = {name , company, phone, mcnum,user,password, createdAt, address, email, notes ,ssn,nmwdt,federalId,kyu, irp,nyhut ,usdot , origon,usdotpin, canumber, ifta,requester, numberoftrucks}
  
  database.ref('details').push(detail).then((ref)=>{
      dispatch(addDetails({
          id: ref.key,
          ...detail
          

      }))
  })

}}



// REMOVE_EXPENSE

const removeDetail = (id)=>({
  type:'removeDetail',
  id
})

export const startRemoveDetail = (data={})=>{
  return (dispatch)=>{
    const {id} = data

    database.ref(`details/${id}`).remove().then(()=>{
      dispatch(removeDetail(id))
    })

  }
}

export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = (data={})=>{
  return (dispatch)=>{
    const {id} = data

    database.ref(`expenses/${id}`).remove().then(()=>{
      dispatch(removeExpense(id))
    })

  }
}

// EDIT_EXPENSE
const editDetail = (id,updates)=>({
  type:'editDetail',
  id,
  updates
})

export const startEditDetail = (id,updates)=>{
  return(dispatch)=>{
      database.ref(`details/${id}`).update(updates).then(()=>{
        dispatch(editDetail(id,updates))
      })
  }
}

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id,updates)=>{
  return(dispatch)=>{
      database.ref(`expenses/${id}`).update(updates).then(()=>{
        dispatch(editExpense(id,updates))
      })
  }
}

export {addDetails,removeDetail,editDetail,startAddDetails}

export const setExpenses=(expenses)=>({
  type:'SET_EXPENSES',
  expenses
})

export const startSetExpenses = ()=>{
  return (dispatch)=> {
  
  return database.ref('expenses').once('value').then((snapshot)=>{
    const expenses = []
    snapshot.forEach((child) => {
      expenses.push({
        id: child.key,
        ...child.val()
      })
    });
    dispatch(setExpenses(expenses))
  })
  
}};

export const setDetails=(details)=>({
  type:'SET_DETAILS',
  details
})

export const startSetDetails = ()=>{
  return (dispatch)=> {
  
  return database.ref('details').once('value').then((snapshot)=>{
    const details = []
    snapshot.forEach((child) => {
      details.push({
        id: child.key,
        ...child.val()
      })
    });
    dispatch(setDetails(details))
  })
  
}};