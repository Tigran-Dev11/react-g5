import s from "./productCard.module.scss";
import { ROUTES } from "../../utils/constant";
import { useState } from "react";
import { useGlobalContext } from "../../hooks/use_global_context";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "../../common/button";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(product.price);
  const { basketItems, setBasketItems } = useGlobalContext();
  const { setItem } = useLocalStorage("basketItems");

  const addBasket = () => {
    const basketItem = {
      id: product.id,
      img: product.image,
      title: product.title,
      price: product.price,
      quantity: count,
    };

    const basketItemExist = basketItems?.find((item) => item.id === product.id);

    if (!basketItemExist) {
      const updateBasketItems = [...basketItems, basketItem];
      setBasketItems(updateBasketItems);
      setItem(updateBasketItems);
      return;
    }

    const updatedBasketItems = basketItems.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + count,
        };
      }

      return item;
    });

    setBasketItems(updatedBasketItems);
    setItem(updatedBasketItems);
  };

  const addFavourite = () => {
    // console.log("Hello");
  };

  const increment = () => {
    setCount(count + 1);
    setPrice((price) => price + product.price);
  };

  const decrement = () => {
    if (count >= 2) {
      setCount(count - 1);
      setPrice((price) => price - product.price);
    }
  };

  return (
    <div className={s.productItem}>
      <div>
        <img src={product.image} alt="product image" />
      </div>

      <div className={s.descr}>
        <h2>
          {product.title.lenght !== 2
            ? product.title.slice(0, 20)
            : product.title}
        </h2>
        <div className={s.price}>
          <span>{price?.toFixed(2)}$</span>
          <div>
            <Button text={<FaRegHeart />} click={addFavourite} />

            <Button text={<MdOutlineShoppingCart />} click={addBasket} />
          </div>
        </div>
      </div>

      <div>
        <Button className={s.increment} text="+" click={increment} />
        <span>{count}</span>
        <Button className={s.decrement} text="-" click={decrement} />
      </div>

      <Button
        click={() => navigate(`${ROUTES.products}/${product.id}`)}
        text="More..."
      />
    </div>
  );
};
