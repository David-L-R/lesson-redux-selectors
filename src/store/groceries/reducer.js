const initialState = {
  groceries: [
    {
      name: "cucumber",
      price: 0.7,
      amount: 3,
    },
    {
      name: "chicken breast",
      price: 8,
      amount: 0.4,
    },
    {
      name: "milk",
      price: 1.2,
      amount: 2,
    },
    {
      name: "whole wheat bread",
      price: 3.2,
      amount: 1,
    },
    {
      name: "ham",
      price: 6,
      amount: 0.2,
    },
  ],
  bought: [
    {
      name: "watermalon",
      price: 4,
      amount: 0.8,
    },
  ],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default: {
      return state;
    }
  }
}
