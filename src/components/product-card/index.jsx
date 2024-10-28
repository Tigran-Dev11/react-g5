import * as S from "./styled"
import { useNavigate } from "react-router-dom";
import { MENU} from "../../utils/constant";
import { useState } from "react";
import { useGlobalContext } from "../../hooks/use-global-context";

export const ProductCard = ({ product }) => {
  const navigation = useNavigate();
  const [count, setCount] = useState(1);
  // const { basketItems, setBasketItems } = useGlobalContext();

 
  const addBasket = () => {

    const basketItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: count,
    };

  };

  const minus = () => {
    if (count > 2) {
      setCount(count - 1);
    }
  };

  const plus = () => {
    setCount(count + 1);
  };

  return (
    <S.ProductCard key={product.id} className="product-item">
      <img src={product.image} alt="" />
      <h3>{product.title}</h3>
      <button
        onClick={() => {
          navigation(`${MENU.PRODUCTS}/${product.id}`);
        }}
      >
        learn more
      </button>

      <div className="card-top-part">
        <div>
          <button onClick={minus}>-</button>
          <span>{count}</span>
          <button onClick={plus}>+</button>
        </div>

        <button onClick={addBasket}>add basket</button>
      </div>
    </S.ProductCard>
  );
};