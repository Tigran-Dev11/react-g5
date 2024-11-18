import s from "./basket.module.scss";
import { useSelector } from "react-redux";
import { productsSelector } from "../../libs/redux/productSlice/selectors";
import BasketItem from "../../components/basketItem";

const Basket = () => {
  const { basketItems } = useSelector(productsSelector);
  return (
    <div className={s.itemWrapper}>
      {basketItems?.map((item) => {
        return <BasketItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Basket;
