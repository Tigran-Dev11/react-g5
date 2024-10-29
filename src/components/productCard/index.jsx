import s from "./productCard.module.scss";
import { ROUTES } from "../../utils/constant";
import { useState } from "react";
import { useGlobalContext } from "../../hooks/use_global_context";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "../../common/button";


export const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const { basketItems, setBasketItems } = useGlobalContext();


    const addBasket = () => {
        const basketItem = {
            id:product.id,
            title:product.title,
            price:product.price,
            quantity: count,
        }
   
    //    basketItems.map(el => el.id === basketItem.id && el.quantity++)
        // basketItems.find((el) =>{
        // return el.id === basketItem.id && el.quantity++ 
        //  })
         
    
        setBasketItems([...basketItems, basketItem])
    
        // console.log(basketItems);
    };

    const addFavourite = () => {
        console.log("Hello");
    };

    const increment = () => {
        setCount(count + 1)
    };

    const decrement = () => {
       if(count >= 2) setCount(count - 1)    
    };



    return(
        <div className={s.productItem} >
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
                  <span>{product.price}$</span>
                  <div>
                    <Button text={<FaRegHeart />} click={ addFavourite}/>

                    <Button text={<MdOutlineShoppingCart />} click={ addBasket}/>
                     
                  </div>
                </div>
              </div>
             
              <div>
               <Button className="increment" text="+" click={increment}/>
                <span>{count}</span>
                <Button className="decrement" text="-" click={decrement}/>
               
              </div>
              
               
              <Button
                click={() => navigate(`${ROUTES.products}/${product.id}`)}
                text="More..."
              />
             
            </div>
        
        
    )
}