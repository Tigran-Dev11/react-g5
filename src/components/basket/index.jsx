import * as S from "./styled";
import { useDispatch } from "react-redux";
import { productActions } from "../../libs/redux/productSlice";

const BasketPageItem = ({ item }) => {
  const dispatch = useDispatch();
  
  const increase = () => {
    dispatch(productActions.incrementProductCount(item.id));
  };

  const decrease = () => {
      dispatch(productActions.decrementProductCount(item.id));
    
  };

  return (
    <S.BasketComponent>
      <S.ImagePlace>
        <S.Image src={item.img} alt={item.title} />
      </S.ImagePlace>
      <span>
        {item.title.length > 20 ? item.title.slice(0, 20) : item.title}
      </span>
      <span>
        Price:<span>{item.price.toFixed(1)}</span>
      </span>
      <S.CountPlace>
        <span onClick={increase}>+</span>
        Count:<span>{item.quentity}</span>
        <span onClick={decrease}>-</span>
      </S.CountPlace>
    </S.BasketComponent>
  );
};

export default BasketPageItem;
