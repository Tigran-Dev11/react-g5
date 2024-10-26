import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import { useFetch } from "../../hooks/use-fetch";
import { ProductCard } from "../../components/product-card";

const Products = () => {
  const [number, setNumber] = useState(0);
  const navigation = useNavigate();
  
  
  const { data, loading } = useFetch({
    url: "https://fakestoreapi.com/products",
  });

  const increment = () => {
    setNumber(number + 1);
  };


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>increment</button>

      <div className="product-list">
        {data?.map((product) => {
          return (
            <ProductCard product={product}/>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
