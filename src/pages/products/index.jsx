import "./style.css";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/use-fetch";
import { ProductCard } from "../../components/product-card";
import { useGlobalContext } from "../../hooks/use-global-context";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../libs/redux/product-slice/selectors";
import { productActions } from "../../libs/redux/product-slice";

const Products = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { productCount, status } = useSelector(productSelector);


  const { basketItems } = useGlobalContext();

  const { data, loading } = useFetch({
    url: "https://fakestoreapi.com/products",
  });

  const increment = () => {
    dispatch(productActions.incrementProductCount(10));
  };

  const changeStatus = ()=>{
    dispatch(productActions.changeStatusToSuccess())
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{productCount}</h1>
      <button onClick={increment}>increment product count</button>


      <br />
      <h1>{status}</h1>
      <br />
      <button onClick={changeStatus}>change Status</button>


      <div className="product-list">
        {data?.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
