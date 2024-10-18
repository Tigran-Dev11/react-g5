import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/loading";
import {IMAGES} from  "../../assets/Images/index"
import "../products/style.css";

export const Product = () => {
  const [product, setProduct] = useState(null);
  const { prodId } = useParams();

  console.log(prodId);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const data = await fetch(`https://fakestoreapi.com/products/${prodId}`);
        const product = await data.json();
        setProduct(product);
      } catch (error) {}
    };

    if (prodId) {
      getSingleProduct();
    }
  }, [prodId]);

  return (
    <div className="product">
      {product && (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />

          <h2>{product.title}</h2>
          <div className="info">
            <p>{product.price}$</p>
            <div className="rate">
              <p>{product.rating.rate}</p>
              <img src={IMAGES.favIcon} alt="FavIcon" />
            </div>
          </div>
        </div>
      )}

      {!product && <Loading />}
    </div>
  );
};
