import { useEffect, useState } from "react";
import { Loading } from "../../components/loading";
import { ProductCard } from "../../components/product-card";
import "../products/style.css";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
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
    return <Loading />;
  }

  return (
    <div className="products">
      {products.map((product) => {
        if (product.title.length >= 30) {
          product.title = product.title.substring(0, 20) + "...";
        }

        return <ProductCard product={product} />;
      })}
    </div>
  );
};
