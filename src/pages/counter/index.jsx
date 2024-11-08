import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../libs/redux/product-slice/selectors";
import { productActions } from "../../libs/redux/product-slice";

export const Counter = () => {
  
  const dispatch = useDispatch();
  const { productCount } = useSelector(productSelector);

  const increment = (e) => {
    e.preventDefault();

    dispatch(productActions.incrementProductCount(1));
  };

  const decrement = (e) => {
    e.preventDefault();

    dispatch(productActions.decrementProductCount(1));
  };
  return (
    <div>
      <form>
        <button onClick={decrement}>-</button>
        <span>{productCount}</span>
        <button onClick={increment}>+</button>
      </form>
    </div>
  );
};
