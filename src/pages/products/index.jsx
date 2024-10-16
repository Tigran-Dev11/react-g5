import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Product } from "../product";
import { IMAGES } from "../../assets/Images";
import { Loading } from "../../components/loading";
import {MENU} from "../../components/menuLists"
import "../products/style.css";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation=useNavigate()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const products = await data.json();
        console.log(products);

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
        if (product.title.length >= 20) {
          product.title = product.title.substring(0, 20) + "...";
        }

        return (
          <div key={product.id} className="product">
            <NavLink>
              <img src={product.image} alt={product.name} />
            </NavLink>
           
            <div className="info">
              <p>{product.price}$</p>
              <div className="rate">
                <p>{product.rating.rate}</p>
                <img src={IMAGES.favIcon} alt="FavIcon" />
              </div>
              <button
                onClick={() => {
                  navigation(`${MENU.PRODUCTS}/${product.id}`);
                }}
              >Button</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
