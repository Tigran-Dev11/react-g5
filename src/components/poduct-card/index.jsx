import s from "./product-card.module.scss"
import Button from "../button";
import { ROUTES } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { productActions } from "../../libs/redux/productSlice";

const ProductCard = ({product}) => {
const dispatch = useDispatch();
const navigate = useNavigate();
 const addFavourite = () => {

 };
 const addBasket = () => {
    dispatch(productActions.addBasket(product))
 }


    return(
        <div className={s.productItem}>
      <div>
        <img src={product?.image} alt="img" />
      </div>

      <div className={s.descr}>
        <h2>
          {product?.title?.lenght !== 2
            ? product?.title?.slice(0, 20)
            : product?.title}
        </h2>
        <div className={s.price}>
          <span>{product?.price?.toFixed(2)}$</span>
          <div>
            <Button text={<FaRegHeart />} click={addFavourite} />

            <Button text={ <HiShoppingCart />} click={addBasket} />
          </div>
        </div>
      </div>

     

       <Button
        click={() => navigate(`${ROUTES.collections}/${product.id}`)}
        text="More..."
      />
    </div>
  );
};
    
export default ProductCard