import { useDispatch, useSelector } from "react-redux";
import s from "./collections.module.scss";
import { useEffect } from "react";
import { productsSelector } from "../../libs/redux/productSlice/selectors";
import { productActions } from "../../libs/redux/productSlice";
import Loader from "../loader";
import ProductCard from "../../components/poduct-card";

const Collections = () => {
  const { products, getProductStatus } = useSelector(productsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, []);

  if (getProductStatus === "pending") {
    return <Loader />;
  }

  return (
    <div className={s.collections}>
      
      {products?.map((product) => (
        <ProductCard product={product} key={product.id}/>
      ))}
    </div>
  );
};
export default Collections;
