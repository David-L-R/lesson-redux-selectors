const initialState = [
  {
    id: "0",
    name: "cucumber",
    price: 0.7,
    amount: 3,
    bought: false,
  },
  {
    id: "1",
    name: "chicken breast",
    price: 8,
    amount: 0.4,
    bought: false,
  },
  {
    id: "2",
    name: "milk",
    price: 1.2,
    amount: 2,
    bought: false,
  },
  {
    id: "3",
    name: "whole wheat bread",
    price: 3.2,
    amount: 1,
    bought: true,
  },
  {
    id: "4",
    name: "ham",
    price: 6,
    amount: 0.2,
    bought: true,
  },
];

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default: {
      return state;
    }
  }
}
