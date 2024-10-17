import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/loading";

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
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
        </div>
      )}

      {!product && <Loading />}
    </div>
  );
};
