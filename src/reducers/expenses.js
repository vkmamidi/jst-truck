// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'addDetails':
    return [
      ...state,
      action.detail
    ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);

    case 'removeDetail':
      return state.filter(({id}) => id!== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    case 'editDetail':
    return state.map((detail)=>{
      if(detail.id===action.id){
        return{
          ...detail,
          ...action.updates
        }
      }
      else{
        return detail;
      }
    })
    case 'SET_EXPENSES':
    return action.expenses;
    
    case 'SET_DETAILS':
    return action.details;
    default:
      return state;
  }
};
