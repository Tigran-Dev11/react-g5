import { useEffect, useState } from "react";
import s from "./products.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";







const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
       const getProducts = async () => {
        try{
         const  data = await  fetch("https://fakestoreapi.com/products");
         const products = await data.json();
         setProducts(products)
        }catch(err){
            alert(err.message)
        }finally{
            setLoading(false)
        }
       }

       getProducts()
    }, [])

    if(loading){
        return <h1>Loading...</h1>
    }
    
    return(
        <div className={s.productList}>
            {
                products?.map(prod => {
                    return(
                        <div className={s.productItem}   key={prod.id}>
                            <a href="#">
                            <img src={prod.image} alt=""/>
                            </a>
                            
                            <div className={s.descr}>
                                <h2>{prod.title.lenght !== 2 ? prod.title.slice(0, 20): prod.title}</h2>
                                <div className={s.price}>
                                    <span>{prod.price}$</span>
                                    <div>
                                        <span><FaRegHeart />
                                    </span>
                                    <span><MdOutlineShoppingCart />
                                    </span>
                                    </div>
                                    
                               </div>
                            </div>
                        </div>
                    ) 
                })
            }
            
        </div>
    )
}
export default Products