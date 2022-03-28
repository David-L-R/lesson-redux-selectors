import "./groceries.css";
import { useSelector } from "react-redux";
import {
  getBoughtGroceries,
  getGroceries,
  getMostExpensive,
  getTotalPrice,
} from "../../store/groceries/selector";
import { getFavorites } from "../../store/user/selector";

export const Groceries = () => {
  const groceries = useSelector(getGroceries);
  const groceriesBought = useSelector(getBoughtGroceries);
  const totalPrice = useSelector(getTotalPrice);
  const mostExpensive = useSelector(getMostExpensive);
  const favorites = useSelector(getFavorites);

  console.log("mostExpensive", mostExpensive);

  return (
    <div>
      <h1>Total {totalPrice}</h1>
      <div className='flex'>
        <h1>Favorites</h1>
        {favorites.map((item) => (
          <div className='card' key={item.id}>
            <h3>{item.name}</h3>
            <p>Amount: {item.amount}</p>
            <p>Total Price: {(item.amount * item.price).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className='flex'>
        <h1>Groceries</h1>
        {groceries.map((item) => (
          <div className='card' key={item.id}>
            <h3>{item.name}</h3>
            <p>Amount: {item.amount}</p>
            <p>Total Price: {(item.amount * item.price).toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className='flex'>
        <h1>Bought</h1>
        {groceriesBought.map((item) => (
          <div className='card' key={item.id}>
            <h3>{item.name}</h3>
            <p>Amount: {item.amount}</p>
            <p>Total Price: {(item.amount * item.price).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
