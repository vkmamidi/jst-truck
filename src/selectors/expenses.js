import moment from 'moment';

// Get visible expenses

export default (expenses, { text,irpMonth, sortBy,dot, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const irpmonthMatch = expense.mm.includes(irpMonth);
    const dotMatch = expense.usdot.endsWith(dot)
    // const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const textMatch = expense.company.toLowerCase().includes(text.toLowerCase());
    
    return startDateMatch && endDateMatch && textMatch && irpmonthMatch&&dotMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
