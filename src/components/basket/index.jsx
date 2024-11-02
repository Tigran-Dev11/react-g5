import { useGlobalContext } from "../../hooks/use-global-context"
import { useState } from "react"
import * as S from "../basket/styled"

const BasketPage=({item})=>{
    const [count,setCount]=useState(item.quentity)
    const [price,setPrice]=useState(item.price*item.quentity);

    const {basketItems,setBasketItems} =useGlobalContext()

    const increase=()=>{
        setCount(count+1)
        setPrice(price=>(price+item.price))
    }

    const decrease =()=>{
        if(count>=2){
            setCount(count-1)
            setPrice(price=>(price-item.price))
        }
    }
}
