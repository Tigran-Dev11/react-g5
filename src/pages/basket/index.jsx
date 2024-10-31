import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import s from "./basket.module.scss";
// import { useGlobalContext } from "../../hooks/use_global_context";
import BasketItem from "../../components/basketItem";

const Basket = () => {
    const { getItem } = useLocalStorage("basketItems");
    const [basketItems, setBasketItems] = useState([]);


    useEffect(() => {
      return setBasketItems(getItem())
    }, [])

   
    return(
        <div className={s.itemWrapper}>
            {
                basketItems?.map((item )=>
                     <BasketItem key={item.id} item={item}/>
                    
                )
            }
        </div>
    )
}

export default Basket;