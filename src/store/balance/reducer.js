import { BALANCE_DEPOSIT, BALANCE_RESET, BALANCE_WITHDRAW } from "./types";

const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case BALANCE_DEPOSIT:
      return {
        ...state,
        amount: state.amount + payload,
      };
    case BALANCE_WITHDRAW:
      return {
        ...state,
        amount: state.amount - payload,
      };
    case BALANCE_RESET:
      return {
        ...state,
        amount: 0,
      };
    default: {
      return state;
    }
  }
}
