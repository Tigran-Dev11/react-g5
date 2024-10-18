import { useEffect, useState } from "react";
import s from "./product.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../common/button";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { prodId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetch(`https://fakestoreapi.com/products/${prodId}`);
        const product = await data.json();

        if (!product) {
          setProduct(null);

          return;
        }

        setProduct(product);
      } catch (err) {
        console.log(err.message);
      }
    };

    prodId && getProduct();
  }, [prodId]);

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
export default Product;
