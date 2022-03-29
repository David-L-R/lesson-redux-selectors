import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/groceries/actions";
import { v4 as uuidv4 } from "uuid";

export const Form = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addItem({
        id: uuidv4(),
        name,
        amount,
        price,
        checked: false,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='amount'>Amount</label>
      <input
        name='amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <label htmlFor='pricePerUnit'>Price per unit</label>
      <input
        name='pricePerUnit'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
