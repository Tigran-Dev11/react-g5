import { useEffect, useState } from "react";
import "./style.css";

const Products = () => {
  const [number, setNumber] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const increment = () => {
    setNumber(number + 1);
  };

  //   useEffect(() => {
  //     console.log("RENDER");
  //   }, []);

  //   useEffect(() => {
  //     console.log("call useEffect");
  //   }, [number]);

  //   useEffect(() => {
  //     let x = 60;

  //     const key = setInterval(() => {
  //       x = x - 1;

  //       if (x === 0) {
  //         clearInterval(key);
  //       }
  //     }, 2000);
  //     return () => {
  //       console.log("component unmounted");
  //       clearInterval(key);
  //     };
  //   }, []);

  //   console.log('hellow');

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const products = await data.json();

        setProducts(products);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>increment</button>

      <div className="product-list">
        {products?.map((product) => {
          return (
            <div key={product.id} className="product-item">
              <img src={product.image} alt="" />
              <h3>{product.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
