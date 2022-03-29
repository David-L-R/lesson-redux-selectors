export const getGroceries = (reduxState) =>
  reduxState.groceries.filter((item) => !item.checked);

export const getBoughtGroceries = (reduxState) =>
  reduxState.groceries.filter((item) => item.checked);

export const getTotalPrice = (reduxState) =>
  reduxState.groceries
    .reduce((sum, current) => sum + current.price * current.amount, 0)
    .toFixed(2);

export const getAverage = (reduxState) => {
  const total = reduxState.groceries.reduce(
    (sum, current) => sum + current.price * current.amount,
    0
  );

  return (total / reduxState.groceries.length).toFixed(2);
};
