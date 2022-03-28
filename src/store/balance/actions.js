import { BALANCE_DEPOSIT, BALANCE_RESET, BALANCE_WITHDRAW } from "./types";

export const deposit = (amount) => ({
  type: BALANCE_DEPOSIT,
  payload: amount,
});

export const withdraw = (amount) => ({
  type: BALANCE_WITHDRAW,
  payload: amount,
});

export const reset = () => ({
  type: BALANCE_RESET,
});
