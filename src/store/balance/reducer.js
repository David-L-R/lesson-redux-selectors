import { DEPOSIT, RESET, WITHDRAW } from "./types";

const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DEPOSIT:
      return {
        ...state,
        amount: state.amount + payload,
      };
    case WITHDRAW:
      return {
        ...state,
        amount: state.amount - payload,
      };
    case RESET:
      return {
        ...state,
        amount: 0,
      };
    default: {
      return state;
    }
  }
}
