import s from "./products.module.scss";
import Loading from "../loading";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { ProductCard } from "../../components/productCard";

const Products = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const searchDebounceValue = useDebounce(searchValue, 1000);
  
  
  const { data, loading } = useFetch({
    url: "https://fakestoreapi.com/products",
  });

  useEffect(() => {
    const filteredData = data?.filter((item) =>
      item.category.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredData);
  }, [searchDebounceValue]);

  if (loading) {
    <Loading />;
  }

  return (
    <div className={s.products}>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="search by category"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />

      <div className={s.productList}>
        {(filteredData?.length ? filteredData : data)?.map((product) => {
          return (
            <ProductCard product={product} key={product.id}/>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
