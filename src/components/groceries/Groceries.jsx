import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store/groceries/actions";
import {
  getAverage,
  getBoughtGroceries,
  getGroceries,
  getTotalPrice,
} from "../../store/groceries/selector";

export const Groceries = () => {
  const dispatch = useDispatch();
  const groceries = useSelector(getGroceries);
  const bought = useSelector(getBoughtGroceries);
  const totalPrice = useSelector(getTotalPrice);
  const averagePrice = useSelector(getAverage);
  return (
    <>
      <h1>Groceries</h1>
      <h2>Total Price: {totalPrice}</h2>
      <h2>Average: {averagePrice}</h2>
      <div>
        <h2>My list</h2>
        {groceries.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Amount: {item.amount}</p>
            <p>Total Price: {(item.amount * item.price).toFixed(2)}</p>
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove Item
            </button>
          </div>
        ))}
      </div>
      <div>
        <h2>Bought</h2>
        {bought.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Amount: {item.amount}</p>
            <p>Total Price: {(item.amount * item.price).toFixed(2)}</p>
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove Item
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
