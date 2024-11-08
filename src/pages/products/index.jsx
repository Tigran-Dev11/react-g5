import "./style.css";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/use-fetch";
import { ProductCard } from "../../components/product-card";
import { useGlobalContext } from "../../hooks/use-global-context";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../libs/redux/product-slice/selectors";
import { productActions } from "../../libs/redux/product-slice";
import { useEffect } from "react";

const Products = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { productCount, status, searchValue, products, getProductStatus } =
    useSelector(productSelector);

  const { basketItems } = useGlobalContext();

  // const { data, loading } = useFetch({
  //   url: "https://fakestoreapi.com/products",
  // });

  const increment = () => {
    dispatch(productActions.incrementProductCount(10));
  };

  const changeStatus = () => {
    dispatch(productActions.changeStatusToSuccess());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(productActions.searchProduct())
     
  };

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, []);


  const onChange = (e)=>{
     dispatch(productActions.onChangeSearchValue(e.target.value));
  }

  if (getProductStatus === "pending") {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {/* <h1>{productCount}</h1>
      <button onClick={increment}>increment product count</button>

      <br />
      <h1>{status}</h1>
      <br />
      <button onClick={changeStatus}>change Status</button> */}

      <div>
          <form action="" onSubmit={onSubmit}>
            <input type="text" value={searchValue} onChange={onChange} />
            <button>search</button>
          </form>
      </div>

      <div className="product-list">
        {products?.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
