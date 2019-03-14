// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});
export const setIrpMonthFilter = (irpMonth = '')=>({
  type: 'SORT_BY_IRPMONTH',
  irpMonth
})

export const setDotFilter = (dot = '')=>({
  type:'SORT_BY_DOT',
  dot
})

export const setAdvanceFilter = (advancemm = '') =>({
  type:'SORT_BY_ADVANCEMM',
  advancemm
})
export const setAdvanceyearFilter = (advanceyear = '') => ({
  type:"SORT_BY_ADVANCEYEAR",
  advanceyear
})
// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

