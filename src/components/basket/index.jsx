import * as S from "./styled";
import { useGlobalContext } from "../../hooks/use-global-context";
import { useState } from "react";

const BasketPageItem = ({ item }) => {
  const [count, setCount] = useState(item.quentity);
  const [price, setPrice] = useState(item.price * item.quentity);

  const { basketItems, setBasketItems } = useGlobalContext();

  const increase = () => {
    setCount(count + 1);
    setPrice((price) => (price + item.price));
  };

  const decrease = () => {
    if (count >= 2) {
      setCount(count - 1);
      setPrice((price) => (price - item.price));
    }
  };

  return (
    <S.BasketComponent>
      <S.ImagePlace>
        <S.Image src={item.img} alt={item.title} />
      </S.ImagePlace>
      <span>
        {item.title.length > 15 ? item.title.slice(0, 11) : item.title}
      </span>
      <span>
        Price:<span>{price.toFixed(2)}</span>
      </span>
      <S.CountPlace>
        <span onClick={increase}>+</span>
        Count:<span>{count}</span>
        <span onClick={decrease}>-</span>
      </S.CountPlace>
    </S.BasketComponent>
  );
};

export default BasketPageItem;
