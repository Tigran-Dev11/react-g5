import s from "./basketItem.module.scss";
import { useDispatch } from "react-redux";
import { productActions } from "../../libs/redux/productSlice";



const BasketItem = ({ item }) => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(productActions.incrementProductCount(item.id));
  };
  const decrement = () => {
    dispatch(productActions.decrementProductCount(item.id));
  };
  return (
    <div className={s.item}>
      <div className={s.image}>
        <img src={item.img} alt="product img" />
      </div>
      <span className={s.title}>
        {item.title.length > 15 ? item.title.slice(0, 11) : item.title}
      </span>
      <span className={s.price}>
        Price:<span>{item.price.toFixed(2)}</span>
      </span>
      <div className={s.count}>
        <span onClick={() => increment(item.quantity)}>+</span>
        Count:<span>{item.quantity}</span>
        <span onClick={decrement}>-</span>
      </div>
    </div>
  );
};

export default BasketItem;
