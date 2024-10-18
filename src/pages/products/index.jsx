import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import { useFetch } from "../../hooks/use-fetch";

const Products = () => {
  const [number, setNumber] = useState(0);
  const navigation = useNavigate();
  
  const { data, loading } = useFetch({
    url: "https://fakestoreapi.com/products",
  });

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
            <div key={product.id} className="product-item">
              <img src={product.image} alt="" />
              <h3>{product.title}</h3>
              <button
                onClick={() => {
                  navigation(`${ROUTES.products}/${product.id}`);
                }}
              >
                learn more
              </button>
              {/* <NavLink to={`${ROUTES.products}/${product.id}`}>product</NavLink> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
