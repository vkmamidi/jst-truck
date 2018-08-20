import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE

const addDetails = (detail)=>({
  type:'addDetails',
  detail
})

const startAddDetails = (detailsData={})=>{
  return(dispatch,getState)=>{
      const uid = getState().auth.uid
      const {ana='',aea='',plates='',cardtype='',cardname='',cardnum='',account='',routing='',exp='',cvv='',bank='',name = '', company='DBA', phone = 0, mcnum='',user='',password='', createdAt = 0, address='', email='', notes = '',ssn='',nmwdt='',federalId = '',kyu='', irp='',nyhut = '',usdot = '', origon='',usdotpin = '', canumber = '', ifta='',requester = '', numberoftrucks=''} = detailsData;
      const detail = {cardtype, cardname, cardnum, account, routing,exp,cvv,bank ,ana,aea,plates,name , company, phone, mcnum,user,password, createdAt, address, email, notes ,ssn,nmwdt,federalId,kyu, irp,nyhut ,usdot , origon,usdotpin, canumber, ifta,requester, numberoftrucks}
  
  database.ref(`users/${uid}/details`).push(detail).then((ref)=>{
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
  return (dispatch,getState)=>{
    const uid = getState().auth.uid
    const {id} = data
    database.ref(`users/${uid}/details/${id}`).remove().then(()=>{
      dispatch(removeDetail(id))
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
  return(dispatch,getState)=>{
    const uid = getState().auth.uid
      database.ref(`users/${uid}/details/${id}`).update(updates).then(()=>{
        dispatch(editDetail(id,updates))
      })
  }
}



export {addDetails,removeDetail,editDetail,startAddDetails}



export const setDetails=(details)=>({
  type:'SET_DETAILS',
  details
})

export const startSetDetails = ()=>{
  return (dispatch,getState)=> {
  const uid = getState().auth.uid
  
  return database.ref(`users/${uid}/details`).once('value').then((snapshot)=>{
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