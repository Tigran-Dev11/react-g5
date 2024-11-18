import { useDispatch, useSelector } from "react-redux";
import s from "./singleProd.module.scss";
import { useEffect } from "react";
import { productActions } from "../../libs/redux/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import { productsSelector } from "../../libs/redux/productSlice/selectors";
import Loader from "../loader";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../components/button";

const SingleProd = () => {
  const dispatch = useDispatch();
  const { prodId } = useParams();
  const { product, getProductStatus } = useSelector(productsSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (prodId) {
      dispatch(productActions.getProduct(prodId));
    }
  }, [prodId, dispatch]);

  if (getProductStatus === "pending") {
    <Loader />;
  }

  return (
    <div className={s.cardWrapper}>
      <Button click={() => navigate(-1)} text={<IoIosArrowBack />} />

      {product ? (
        <div className={s.productCard}>
          <h2>{product.title}</h2>
          <img src={product.image} alt="" />
          <div className={s.text}>
            <div>{product.description}</div>
          </div>
        </div>
      ) : (
        <h1>This product is not listed</h1>
      )}
    </div>
  );
};

export default SingleProd;
