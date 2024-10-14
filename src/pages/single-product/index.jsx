import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { prodId } = useParams();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const data = await fetch(`https://fakestoreapi.com/products/${prodId}`);
        const product = await data.json();

        setProduct(product);
      } catch (error) {}
    };

    if(prodId){
        getSingleProduct()
    }
  }, [prodId]);

  return (
    <div>
      {product && (
        <div>
          <h1>{product.title}</h1>
          <img src={product.image} alt="" />
          <p>{product.description}</p>
        </div>
      )}
      {!product && <h1>Loading...</h1>} 
    </div>
  );
};

export default SingleProduct;
