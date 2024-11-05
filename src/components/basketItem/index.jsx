import s from "./basketaItem.module.scss";
import { useState } from "react";

const BasketItem = ({ item }) => {
  const [count, setCount] = useState(item.quantity);
  const [price, setPrice] = useState(item.price * item.quantity);


  const increment = () => {
    setCount(count + 1);
    setPrice((price) => price + item.price);
  };

  const decrement = () => {
    if (count >= 2) {
      setCount(count - 1);
      setPrice((price) => price - item.price);
    }
  };

  return (
    <div className={s.item}>
      <div className={s.image}>
        <img src={item.img} alt="product image" />
      </div>
      <span className={s.title}>
        {item.title.length > 15 ? item.title.slice(0, 11) : item.title}
      </span>
      <span className={s.price}>
        Price:<span>{price.toFixed(2)}</span>
      </span>
      <div className={s.count}>
        <span onClick={increment}>+</span>
        Count:<span>{count}</span>
        <span onClick={decrement}>-</span>
      </div>
    </div>
  );
};
export default BasketItem;
