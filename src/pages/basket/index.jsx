import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import s from "./basket.module.scss";
// import { useGlobalContext } from "../../hooks/use_global_context";
import BasketItem from "../../components/basketItem";
import { useGlobalContext } from "../../hooks/use_global_context";

const Basket = () => {
  const { basketItems } = useGlobalContext();


  return (
    <div className={s.itemWrapper}>
      {basketItems?.map((item) => (
        <BasketItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Basket;
