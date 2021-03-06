import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (

  
  <NavLink className='list-item' to={`/edit/${props.id}`}>
  <h4 className='list-item__title'>{props.company}</h4>
  <p className="list-item__email">{props.email}</p>
  </NavLink>
   
  
  // <tr>
  // <td><NavLink to={`/edit/${props.id}`}>{props.name}</NavLink></td>
  // <td>{props.phone}</td>
  // <td>{props.company}</td>
  // <td>{props.address}</td>
  // <td>{props.email}</td>
  // <td>{props.notes}</td>
  // <td>{props.ssn}</td>
  // <td>{moment(props.createdAt).format('MMMM Do, YYYY')}</td>
  // <td>{props.nmwdt}</td>
  // <td>{props.federalId}</td>
  // <td>{props.kyu}</td>
  // <td>{props.irp}</td>
  // <td>{props.nyhut}</td>
  // <td>{props.user}</td>
  // <td>{props.password}</td>
  // <td>{props.usdot}</td>
  // <td>{props.mcnum}</td>
  // <td>{props.origon}</td>
  // <td>{props.usdotpin}</td>
  // <td>{props.canumber}</td>
  // <td>{props.ifta}</td>
  // <td>{props.requester}</td>
  // <td>{props.numberoftrucks}</td>
  // </tr>
);

export default ExpenseListItem;

