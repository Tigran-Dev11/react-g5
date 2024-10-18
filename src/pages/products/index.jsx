import { useEffect, useState } from "react";
import s from "./products.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import Button from "../../common/button";
import Loading from "../loading";








const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


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
       getProducts();
    }, [])

    if (loading) {
        return <Loading/>;
      }
    
    return(
        <div className={s.productList}>
            {
                products?.map(prod => {
                    return(
                        <div className={s.productItem}   key={prod.id}>
                            <div >
                             <img src={prod.image} alt=""/>
                            </div>
                            
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
                            <Button click={() => navigate(`${ROUTES.products}/${prod.id }`)} text="More..."/>
                           
                        </div>
                    ) 
                })
            }
            
        </div>
    )
}
export default Products