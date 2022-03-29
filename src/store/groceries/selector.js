export const getGroceries = (reduxState) =>
  reduxState.groceries.filter((item) => !item.bought);

export const getBoughtGroceries = (reduxState) =>
  reduxState.groceries.filter((item) => item.bought);

export const getTotalPrice = (reduxState) =>
  reduxState.groceries
    .reduce((previous, current) => {
      return previous + current.price * current.amount;
    }, 0)
    .toFixed(2);

export const getMostExpensive = (reduxState) =>
  reduxState.groceries.reduce((previous, next) =>
    previous.price * previous.amount >= next.price * next.amount
      ? previous
      : next
  );
