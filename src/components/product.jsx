import { useState } from "react";
import { useProductContext } from "../hooks/use-product-context";

export default function product() {
  const [count, setCount] = useState(1);

  const { basketItems, setBasketItems } = useProductContext();

  const addBasket = () => {
    let body = {
      id: "2345464",
      name: "product 1",
      price: 100,
      quantity: count,
      image: "dvdgff",
    };
  };

    return (
    <div>
      <button onClick={addBasket}>add basket</button>
    </div>
  );
}