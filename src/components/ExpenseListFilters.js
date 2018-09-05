import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, setIrpMonthFilter } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
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
  render() {
    return (
      <div className='content-container'>
        <div className='input-group'>
        <div className='input-group__item'>
        <input
          type="text"
          className="text-input text-input__filters"
          value={this.props.filters.text}
          onChange={this.onTextChange}
          placeholder="Search Company"
        />
        </div>
        <div className='input-group__item'>
        <input
          type="text"
          className="text-input text-input__filters"
          value={this.props.filters.irpMonth}
          onChange={this.onMonthChange}
          placeholder="Enter IRP MM"
        />
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
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
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