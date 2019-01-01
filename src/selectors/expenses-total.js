export default (expenses) => {
  return expenses
      .map((expense) => parseInt(expense.numberoftrucks,10))
      .reduce((sum, value) => sum + value, 0);
};
