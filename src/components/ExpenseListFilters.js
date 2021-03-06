import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter,setAdvanceFilter,setAdvanceyearFilter ,sortByDate, sortByAmount, setStartDate, setEndDate, setIrpMonthFilter, setDotFilter, sortByCompanyType } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
    selected:''
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onMonthChange = (e)=>{
    this.props.setIrpMonthFilter(e.target.value);
  }
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
  onDotChange = (e)=>{
    this.props.setDotFilter(e.target.value);
  }
  onAdvanceChange = (e)=>{
    this.props.setAdvanceFilter(e.target.value);
  }
  onAdvanceyearChange = (e)=>{
    this.props.setAdvanceYearFilter(e.target.value);
  }
  oncompanychange = (e)=>{
    const selected = e.target.value;
    this.setState(()=>({selected}))
    this.props.sortByCompanytype(selected);
  }
  render() {
    return (
      <div className='content-container'>
      <div>
      <p style={{color:"white",fontWeight:"700",fontSize:"18px"}}><u>Search By:-</u></p>
      </div>
        <div className='input-group'>
        <div className='input-group__item'>
        <input
          type="text"
          className="text-input text-input__filters__dot"
          value={this.props.filters.text}
          onChange={this.onTextChange}
          placeholder="Search Company"
        />
        </div>
        <div className='input-group__item'>
        <input
          type="text"
          className="text-input text-input__filters__dot"
          value={this.props.filters.advancemm}
          onChange={this.onAdvanceChange}
          placeholder="Advance Month"
        />
        </div>
        <div className='input-group__item'>
        <input
          type="text"
          className="text-input text-input__filters__dot"
          value={this.props.filters.advanceYear}
          onChange={this.onAdvanceyearChange}
          placeholder="Advance Year"
        />
        </div>
        <div className='input-group__item'>
        <input
          type='text'
          className="text-input text-input__filters__dot"
          value={this.props.filters.dot}
          onChange={this.onDotChange}
          placeholder="Search USDot"
          />
        </div>
        <div className='input-group__item'>
        <input
          type="text"
          className="text-input text-input__filters__dot"
          value={this.props.filters.irpMonth}
          onChange={this.onMonthChange}
          placeholder="Enter IRP MM"
        />
        </div>
        <div className='input-group__item'>
        <select className='text-input text-input__filters__dot' onChange={this.oncompanychange} value={this.state.selected}>
        <option value="">---Select an Option---</option>
        <option value="DBA">DBA</option>
        <option value="INC">INC</option>
        </select>
        </div>
        <div className='input-group__item'>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        </div>
        </div>        
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setIrpMonthFilter:(irpMonth)=> dispatch(setIrpMonthFilter(irpMonth)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setDotFilter: (dot) => dispatch(setDotFilter(dot)),
  setAdvanceFilter: (advancemm) => dispatch(setAdvanceFilter(advancemm)),
  setAdvanceYearFilter: (advanceYear) => dispatch(setAdvanceyearFilter(advanceYear)),
  sortByCompanytype:(comType)=> dispatch(sortByCompanyType(comType))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

// <select
        // className="select__filter select"
        //   value={this.props.filters.sortBy}
        //   onChange={this.onSortChange}
        // >
        //   <option value="date">Date</option>
        //   <option value="amount">Amount</option>
        // </select>