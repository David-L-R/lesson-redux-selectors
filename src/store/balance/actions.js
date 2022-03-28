import { DEPOSIT, RESET, WITHDRAW } from "./types";

export const deposit = (amount) => ({
  type: DEPOSIT,
  payload: amount,
});

export const withdraw = (amount) => ({
  type: WITHDRAW,
  payload: amount,
});

export const reset = () => ({
  type: RESET,
});
