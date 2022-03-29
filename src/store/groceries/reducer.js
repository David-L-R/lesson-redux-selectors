import { ADDING_NEW_ITEM, REMOVE_ITEM } from "./types";

const initialState = [
  {
    id: "0",
    name: "cucumber",
    price: 0.7,
    amount: 3,
    checked: false,
  },
  {
    id: "1",
    name: "chicken breast",
    price: 8,
    amount: 0.4,
    checked: false,
  },
  {
    id: "2",
    name: "milk",
    price: 1.2,
    amount: 2,
    checked: true,
  },
  {
    id: "3",
    name: "whole wheat bread",
    price: 3.2,
    amount: 1,
    checked: true,
  },
  {
    id: "4",
    name: "ham",
    price: 6,
    amount: 0.2,
    checked: true,
  },
];

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADDING_NEW_ITEM:
      return [...state, payload];
    case REMOVE_ITEM:
      return state.filter((item) => item.id !== payload); // payload === id
    default: {
      return state;
    }
  }
}
