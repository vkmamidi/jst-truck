import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name:props.expense ? props.expense.name:'',
            company:props.expense ? props.expense.company:'DBA',
            phone:props.expense ? props.expense.phone:'',
            createdAt:props.expense ? moment(props.expense.createdAt):moment(),
            address:props.expense ? props.expense.address:'',
            email:props.expense ? props.expense.email:'',
            notes:props.expense ? props.expense.notes:'',
            ssn:props.expense ? props.expense.ssn:'', 
            nmwdt:props.expense ? props.expense.nmwdt:'',
             federalId:props.expense ? props.expense.federalId:'', 
             kyu:props.expense ? props.expense.kyu:'', 
             nyhut:props.expense ? props.expense.nyhut:'',
             user:props.expense ? props.expense.user: '',
             password:props.expense ? props.expense.password: '',
             usdot:props.expense ? props.expense.usdot:'',
             mcnum:props.expense ? props.expense.mcnum: '',
             irp:props.expense ? props.expense.irp:'',
             origon:props.expense ? props.expense.origon:'',
             usdotpin:props.expense ? props.expense.usdotpin:'',
             canumber:props.expense ? props.expense.canumber:'',
             ifta:props.expense ? props.expense.ifta:'',
            requester:props.expense ? props.expense.requester:'',
            numberoftrucks:props.expense ? props.expense.numberoftrucks:'',

      // description: props.expense ? props.expense.description : '',
      // note: props.expense ? props.expense.note : '',
      // amount: props.expense ? (props.expense.amount / 100).toString() : '',
      // createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      // calendarFocused: false,
      error: ''
    };
  }

  // Details

  onNameChange = (e)=>{
    const name = e.target.value
    this.setState(()=>({name}))
}	
onMcnumChange = (e)=>{
    const mcnum = e.target.value
    this.setState(()=>({mcnum}))
}
onUserChange = (e)=>{
    const user = e.target.value
    this.setState(()=>({user}))
}
onPasswordChange = (e)=>{
    const password = e.target.value
    this.setState(()=>({password}))
}

onCompanyChange = (e)=>{
  const company = e.target.value
  this.setState(()=>({company}))
  
}
onPhoneChange = (e)=>{
  const phone = e.target.value
  this.setState(()=>({phone}))
}
onAddressChange = (e)=>{
  const address = e.target.value
  this.setState(()=>({address}))
}
onEmailChange = (e)=>{
  const email = e.target.value
  this.setState(()=>({email}))
}
onNotesChange = (e)=>{
  const notes = e.target.value
  this.setState(()=>({notes}))
}
onSsnChange = (e)=>{
  const ssn = e.target.value
  this.setState(()=>({ssn}))
}
onNMChange = (e)=>{
  const nmwdt = e.target.value
  this.setState(()=>({nmwdt}))
}
onFederalChange = (e)=>{
  const federalId = e.target.value
  this.setState(()=>({federalId}))
}
onIrpChange = (e)=>{
  const irp = e.target.value
  this.setState(()=>({irp}))
}
onKYUChange = (e)=>{
  const kyu = e.target.value
  this.setState(()=>({kyu}))
}
onNYChange = (e)=>{
  const nyhut = e.target.value
  this.setState(()=>({nyhut}))
}
onOrigonChange = (e)=>{
  const origon = e.target.value
  this.setState(()=>({origon}))
}
onUsdotChange = (e)=>{
  const usdot = e.target.value
  this.setState(()=>({usdot}))
}
onPinChange = (e)=>{
  const usdotpin = e.target.value
  this.setState(()=>({usdotpin}))
}
onCaChange = (e)=>{
  const canumber = e.target.value
  this.setState(()=>({canumber}))
}
onIFTAChange = (e)=>{
  const ifta = e.target.value
  this.setState(()=>({ifta}))
}
onRequesterChange = (e)=>{
  const requester = e.target.value
  this.setState(()=>({requester}))
}
onTruckChange = (e)=>{
  const numberoftrucks = e.target.value
  this.setState(()=>({numberoftrucks}))
}





  // expenses
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name || !this.state.phone) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name:this.state.name,
        phone:this.state.phone,
        createdAt:this.state.createdAt.valueOf(),
        address:this.state.address,
        notes:this.state.notes,
        company:this.state.company,
        email:this.state.email,
        ssn:this.state.ssn,
        nmwdt:this.state.nmwdt,
        federalId:this.state.federalId,
        kyu:this.state.kyu,
        mcnum:this.state.mcnum,
        user:this.state.user,
        password:this.state.password,
        irp:this.state.irp,
        nyhut:this.state.nyhut,
        usdot:this.state.usdot,
        origon:this.state.origon,
        usdotpin:this.state.usdotpin,
        canumber:this.state.canumber,
        ifta:this.state.ifta,
        requester:this.state.ifta,
        numberoftrucks:this.state.numberoftrucks,

        // description: this.state.description,
        // amount: parseFloat(this.state.amount, 10) * 100,
        // createdAt: this.state.createdAt.valueOf(),
        // note: this.state.note
      });
    }
  };
  render() {
    return (

      // Details
      <div>
            <form  className='form_head' onSubmit = {this.onSubmit}>
            <input type='text' placeholder='ANA'/>
            <input type = 'text' placeholder='AEA'/>
            <input type = 'text' placeholder='Plates Only'/>
            <div className='form'>
            <label>
            Name:
            <input type='text' value={this.state.name} onChange ={this.onNameChange} autoFocus />
            </label>
            <label>
            Select company
            <select value = {this.state.company} onChange={this.onCompanyChange}>
            <option value='DBA' >DBA</option>
            <option value='INC' >INC</option>
            <option value='LLC' >LLC</option>
            </select>
            </label>
            </div>
            <div className='form'>
            <label>
            Phone:
            <input type='number' value={this.state.phone} onChange ={this.onPhoneChange}/>
            </label>
            <label>
            Address:
            <textarea value={this.state.address} onChange ={this.onAddressChange}/>
            </label>
            </div>
            <div className='form'>
            <label>
            EMAIL:
            <input type='email' value={this.state.email} onChange ={this.onEmailChange}/>
            </label>
            <label>
            Notes:
            <textarea value={this.state.notes} onChange ={this.onNotesChange}/>
            </label>
            </div>
            <div className='form'>
            <label>
            SSN:
            <input type='text' value={this.state.ssn} onChange ={this.onSsnChange}/>
            </label>
            <label>
            NM WDT#:
            <input type='text' value={this.state.nmwdt} onChange ={this.onNMChange}/>
            </label>
            </div>
            <div className='form'>
            <label>
            Federal Tax Id:
            <input type='text' value={this.state.federalId} onChange ={this.onFederalChange}/>
            </label>
            <label>
            KYU #:
            <input type='text' value={this.state.kyu} onChange ={this.onKYUChange}/>
            </label>
            </div>
            <div className='form'>
            <label>
            IRP/MM/DD
            <input type='text' value={this.state.irp} onChange = {this.onIrpChange}/>
            </label>
            <div className='user'>
            <label>
            NY HUT#
            <input type='text' value={this.state.nyhut} onChange ={this.onNYChange}/>
            </label>
            <label>
            User:
            <input type='text' value={this.state.user} onChange ={this.onUserChange}/>
            </label>
            <label>
            Password:
            <input type='text' value={this.state.password} onChange ={this.onPasswordChange}/>
            </label>
            </div>
            </div>
            <div className='form'>
            <label>
            USDOT:
            <input type='text' value={this.state.usdot} onChange ={this.onUsdotChange}/>
            </label>
            <label>
            MC#:
            <input type='text' value={this.state.mcnum} onChange ={this.onMcnumChange}/>
            </label>
            </div>
            <div className='form'>
            <label>
            ORIGON #:
            <input type='text' value={this.state.origon} onChange ={this.onOrigonChange}/>
            </label>
            <label>
            USDOT Pin:
            <input type='text' value={this.state.usdotpin} onChange ={this.onPinChange}/>
            </label>
            </div>
            <div className='form'>
            <label>
            CA Number:
            <input type='text' value={this.state.canumber} onChange ={this.onCaChange}/>
            </label>
            <label>
            IFTA CA#:
            <input type='text' value={this.state.ifta} onChange ={this.onIFTAChange}/>
            </label>
            </div>
            <div className='form'>
            <label>
            Requester Code:
            <input type='text' value={this.state.requester} onChange ={this.onRequesterChange}/>
            </label>
            <label>
            Number of trucks:
            <input type='text' value={this.state.numberoftrucks} onChange ={this.onTruckChange}/>
            </label>
            </div>
            {this.props.expense ? <button>Update Details</button> : <button>Add Details</button>} 
            </form>
            </div>




      // Expenses

      // <div>
      //   {this.state.error && <p>{this.state.error}</p>}
      //   <form onSubmit={this.onSubmit}>
      //     <input
      //       type="text"
      //       placeholder="Description"
      //       autoFocus
      //       value={this.state.description}
      //       onChange={this.onDescriptionChange}
      //     />
      //     <input
      //       type="text"
      //       placeholder="Amount"
      //       value={this.state.amount}
      //       onChange={this.onAmountChange}
      //     />
      //     <SingleDatePicker
      //       date={this.state.createdAt}
      //       onDateChange={this.onDateChange}
      //       focused={this.state.calendarFocused}
      //       onFocusChange={this.onFocusChange}
      //       numberOfMonths={1}
      //       isOutsideRange={() => false}
      //     />
      //     <textarea
      //       placeholder="Add a note for your expense (optional)"
      //       value={this.state.note}
      //       onChange={this.onNoteChange}
      //     >
      //     </textarea>
      //     <button>Add Expense</button>
      //   </form>
      // </div>
    )
  }
}
