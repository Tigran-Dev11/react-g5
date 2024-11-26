import { useEffect, useState } from "react";
import { Loading } from "../../components/loading";
import { ProductCard } from "../../components/productCard";
import * as S from "./styled";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        console.log(data);

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
    return <Loading />;
  }

  return (
    <S.ProductsPlace className="products">
      {products.map((product) => {
        if (product.title.length >= 30) {
          product.title = product.title.substring(0, 20) + "...";
        }

        return <ProductCard product={product} />;
      })}
    </S.ProductsPlace>
  );
};
