import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, reset, withdraw } from "../../store/balance/actions";
import { selectBalance } from "../../store/balance/selector";

export const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [amount, setAmount] = useState(0);

  return (
    <>
      <p>Balance: {balance}$</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          width: "200px",
        }}
      >
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button
          onClick={() => {
            dispatch(deposit(amount));
            setAmount(0);
          }}
        >
          Deposit
        </button>
        <button
          onClick={() => {
            dispatch(withdraw(amount));
            setAmount(0);
          }}
        >
          Withdraw
        </button>
        <button
          onClick={() => {
            dispatch(reset());
            setAmount(0);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};
