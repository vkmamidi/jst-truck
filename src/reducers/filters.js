import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  irpMonth:'',
  dot:'',
  advancemm:'',
  advanceyear:'',
  comtype:'',
  startDate: moment('09-01-2018','MM-DD-YYYY'),
  endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };

      case 'SORT_BY_IRPMONTH':
      return {
        ...state,
        irpMonth: action.irpMonth
      }
      case "SORT_BY_DOT":
      return{
        ...state,
        dot:action.dot
      }
      case "SORT_BY_ADVANCEMM":
      return{
        ...state,
        advancemm:action.advancemm
      }
      case "SORT_BY_ADVANCEYEAR":
      return{
        ...state,
        advanceyear:action.advanceyear
      }
      case "SORT_BY_COMPANYTYPE":
      return{
        ...state,
        comtype:action.comtype
      }
    default:
      return state;
  }
};
