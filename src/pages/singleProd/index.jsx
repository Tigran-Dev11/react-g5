import { useDispatch, useSelector } from "react-redux";
import s from "./singleProd.module.scss";
import { useEffect } from "react";
import { productActions } from "../../libs/redux/productSlice";
import { useParams } from "react-router-dom";
import { productSelector } from "../../libs/redux/productSlice/selectors";
import Loader from "../loader";


const SingleProd = () => {

    const dispatch = useDispatch()
    const {prodId} = useParams()
    const {product, getProductStatus} = useSelector(productSelector)
  
    useEffect(() => {
        if(prodId){
            dispatch(productActions.getProduct(prodId))
        }
        
    }, [prodId])

    if(getProductStatus === "pending"){
        <Loader/>
    }

    return(
        <div className={s.product}>Single Product

        <div>
            <img src={product?.image} alt="" />
        </div>
        </div>
    )
}

export default SingleProd