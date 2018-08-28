import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import Axios from '../../node_modules/axios';
import axios from 'axios';


export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img:'',
      avatar:'',
      isUploading:false,
      progress:0,
      avatarURL:'',
      ana:props.expense ? props.expense.ana:'Ana',
      name:props.expense ? props.expense.name:'',
      capoa:props.expense ? props.expense.capoa:'',
      nmpoa:props.expense ? props.expense.nmpoa:'',
            company:props.expense ? props.expense.company:'',
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
            bank:props.expense ? props.expense.bank:'',
            account:props.expense ? props.expense.account:'',
            routing:props.expense ? props.expense.routing:'',
            cardtype:props.expense ? props.expense.cardtype:'',
            cardname:props.expense ? props.expense.cardname:'',
            cardnum:props.expense ? props.expense.cardnum:'',
            cvv:props.expense ? props.expense.cvv:'',
            exp:props.expense ? props.expense.exp:'',
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

onCapoaChange = (e)=>{
  const capoa = e.target.value
  this.setState(()=>({capoa}))
}
onNmpoaChange = (e)=>{
  const nmpoa = e.target.value
  this.setState(()=>({nmpoa}))
}

onAnaChange = (e)=>{
  const ana = e.target.value
  this.setState(()=>({ana}))
}
onBankChange = (e)=>{
  const bank = e.target.value
  this.setState(()=>({bank}))
}
onAccountChange = (e)=>{
  const account = e.target.value
  this.setState(()=>({account}))
}
onRouteChange = (e)=>{
  const routing = e.target.value
  this.setState(()=>({routing}))
}
onCardtypeChange = (e)=>{
  const cardtype = e.target.value
  this.setState(()=>({cardtype}))
}
onCardnumChange = (e)=>{
  const cardnum = e.target.value
  this.setState(()=>({cardnum}))
}
onCardChange = (e)=>{
  const cardname = e.target.value
  this.setState(()=>({cardname}))
}
onCvvChange = (e)=>{
  const cvv = e.target.value
  this.setState(()=>({cvv}))
}
onExpChange = (e)=>{
  const exp = e.target.value
  this.setState(()=>({exp}))
}
onDateChange = (createdAt) => {
  if (createdAt) {
    this.setState(() => ({ createdAt }));
  }
};

handleUploadStart = () => this.setState({isUploading: true, progress: 0});
handleProgress = (progress) => this.setState({progress});
handleUploadError = (error) => {
this.setState({isUploading: false});
}
handleUploadSuccess = (filename) => {
  this.setState({avatar: filename, progress: 100, isUploading: false});
  firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
}

onFocusChange = ({ focused }) => {
  this.setState(() => ({ calendarFocused: focused }));
};

onFileChange =(e)=>{
  let file = e.target.files[0]
  console.log(file)
  firebase.storage().ref().child(`files/${this.state.company}`).put(file).then((snapshot)=>{
    console.log("file uploaded")
  })
  
}

onEmailClick = async(e)=>{
  
  await axios.post("/send",{
    email:this.props.expense.email,
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error.response);
  });
}

componentDidMount(){
  let filename = firebase.storage().ref().child(`files/${this.state.company}`);
  filename.getDownloadURL().then((url)=>{this.setState(()=>({img:url}))})
  // console.log(this.state.img)
}


  // expenses

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        ana:this.state.ana,
        name:this.state.name,
        phone:this.state.phone,
        nmpoa:this.state.nmpoa,
        capoa:this.state.capoa,
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
        bank:this.state.bank,
        account:this.state.account,
        routing:this.state.routing,
        cardtype:this.state.cardtype,
        cardnum:this.state.cardnum,
        cardname:this.state.cardname,
        exp:this.state.exp,
        cvv:this.state.cvv,

      
      });
    }
  };
  render() {
    return (

      // Details
      <div className='content-container'>
            <form  className='form_head' onSubmit = {this.onSubmit}>
            <div className='form'>
            <label>
            <select className="select__add" value = {this.state.ana} onChange={this.onAnaChange}>
            <option value='Ana' >ANA</option>
            <option value='Aea' >AEA</option>
            <option value='PlatesOnly' >Plates Only</option>
            </select>
            </label>
            <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        {this.props.expense ? <button onClick={this.onEmailClick}>Send Email</button>: <div></div> }
        {this.props.expense ?(<label><a href={this.state.img} download>Your file</a> <input className = 'button button__logout' type='file' onChange={this.onFileChange} id='file-name'/></label>) : <input className='button button__logout' type='file' onChange={this.onFileChange} id='file-name' multiple/> }
        </div>
            <div className='form'>
            <div>
            <label>
            Name:
            <br/>
            <input className="text-input" type='text' value={this.state.name} onChange ={this.onNameChange} autoFocus />
            </label>
            </div>
            <div>
            <label>
            Company Name:
            <br/>
            <input className="text-input" type='text' value={this.state.company} onChange ={this.onCompanyChange}/>
            </label>
            </div>
            <label>
            Phone:
            <br/>
            <input className="text-input" type='number' value={this.state.phone} onChange ={this.onPhoneChange}/>
            </label>
            </div>
            <div className='form'> 
            <label>
            Address:
            <br/>
            <textarea className='textarea' value={this.state.address} onChange ={this.onAddressChange}/>
            </label>
            <label>
            EMAIL:
            <br/>
            <input className="text-input text-input__email" type='email' value={this.state.email} onChange ={this.onEmailChange}/>
            </label>
            <label>
            SSN:
            <br/>
            <input className="text-input" type='text' value={this.state.ssn} onChange ={this.onSsnChange}/>
            </label>
            </div>
            <div className='form'>
            <label>
            NM WDT#:
            <br/>
            <input className="text-input" type='text' value={this.state.nmwdt} onChange ={this.onNMChange}/>
            </label>
            <label>
            Federal Tax Id:
            <br/>
            <input className="text-input" type='text' value={this.state.federalId} onChange ={this.onFederalChange}/>
            </label>
            
            <label>
            KYU #:
            <br/>
            <input className="text-input" type='text' value={this.state.kyu} onChange ={this.onKYUChange}/>
            </label>
            </div>
            <div className='form'>
            <div className='user'>
            <label>
            IRP/MM/DD
            <br/>
            <input className="text-input" type='text' value={this.state.irp} onChange = {this.onIrpChange}/>
            </label>
            <label>
            CA POA
            <br/>
            <input className="text-input" type='text' value={this.state.capoa} onChange = {this.onCapoaChange}/>
            </label>
            <label>
            NM POA
            <br/>
            <input className="text-input" type='text' value={this.state.nmpoa} onChange = {this.onNmpoaChange}/>
            </label>
            </div>
            <div className='user'>
            <label>
            NY Oscar
            <br/>
            <input className="text-input" type='text' value={this.state.nyhut} onChange ={this.onNYChange}/>
            </label>
            <label>
            User:
            <br/>
            <input className="text-input" type='text' value={this.state.user} onChange ={this.onUserChange}/>
            </label>
            <label>
            Password:
            <br/>
            <input className="text-input" type='text' value={this.state.password} onChange ={this.onPasswordChange}/>
            </label>
            </div>
            <div className='user'>
            <label>
            USDOT:
            <br/>
            <input className="text-input" type='text' value={this.state.usdot} onChange ={this.onUsdotChange}/>
            </label>
            <label>
            MC#:
            <br/>
            <input className="text-input" type='text' value={this.state.mcnum} onChange ={this.onMcnumChange}/>
            </label>
            </div>
            </div>
            <div className='form'>
            <label>
            ORIGON #:
            <br/>
            <input className="text-input" type='text' value={this.state.origon} onChange ={this.onOrigonChange}/>
            </label>
            
            <label>
            USDOT Pin:
            <br/>
            <input className="text-input" type='text' value={this.state.usdotpin} onChange ={this.onPinChange}/>
            </label>
            <label>
            CA Number:
            <br/>
            <input className="text-input" type='text' value={this.state.canumber} onChange ={this.onCaChange}/>
            </label>
            </div>
            <div className='form'>
            <label>
            IFTA CA#:
            <br/>
            <input className="text-input" type='text' value={this.state.ifta} onChange ={this.onIFTAChange}/>
            </label>
            
            <label>
            Requester Code:
            <br/>
            <input className="text-input" type='text' value={this.state.requester} onChange ={this.onRequesterChange}/>
            </label>
            <label>
            Number of trucks:
            <br/>
            <input className="text-input" type='text' value={this.state.numberoftrucks} onChange ={this.onTruckChange}/>
            </label>
            </div>
            <div className='form'>
            <div className='user'>
            <label>
            Bank Name:
            <br/>
            <input className="text-input" type='text' value={this.state.bank} onChange ={this.onBankChange}/>
            </label>
            <label>
            Account #:
            <br/>
            <input className="text-input" type='text' value={this.state.account} onChange ={this.onAccountChange}/>
            </label>
            <label>
            Routing #:
            <br/>
            <input className="text-input" type='text' value={this.state.routing} onChange ={this.onRouteChange}/>
            </label>
            </div>
            <div className='user'>
            <label>
            Card Type:
            <br/>
            <input className="text-input" type='text' value={this.state.cardtype} onChange ={this.onCardtypeChange}/>
            </label>
            <label>
            Card #:
            <br/>
            <input className="text-input" type='text' value={this.state.cardnum} onChange ={this.onCardnumChange}/>
            </label>
            <label>
            Name on Card:
            <br/>
            <input className="text-input" type='text' value={this.state.cardname} onChange ={this.onCardChange}/>
            </label>
            <div className='form'>
            <label>
            Exp:
            <br/>
            <input className="text-input__card" type='text' value={this.state.exp} onChange ={this.onExpChange}/>
            </label>
            <label>
            CVV:
            <br/>
            <input className="text-input__card" type='text' value={this.state.cvv} onChange ={this.onCvvChange}/>
            </label>
            </div>
            </div>
            </div>
            <div>
             <label>
              Notes:
             <br/>
             <textarea className='textarea__notes' value={this.state.notes} onChange ={this.onNotesChange}/>
             </label>
            </div>
            {this.props.expense ? <button className='button'>Update Details</button> : <button className='button'>Add Details</button>} 
            </form>
            </div>

      
    )
  }
}



// <label>Avatar:</label>
// {this.state.isUploading &&
// <p>Progress: {this.state.progress}</p>
// }
// {this.state.avatarURL &&
// <img src={this.state.avatarURL} />
// }
// <FileUploader
// accept="image/*"
// name="avatar"
// randomizeFilename
// storageRef={firebase.storage().ref('images')}
// onUploadStart={this.handleUploadStart}
// onUploadError={this.handleUploadError}
// onUploadSuccess={this.handleUploadSuccess}
// onProgress={this.handleProgress}
// />