import s from "./products.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import Button from "../../common/button";
import Loading from "../loading";
import { useFetch } from "../../hooks/useFetch";
// import { useDebounce } from "../../hooks/useDebounce";

const Products = () => {
  const navigate = useNavigate();
  const { data, loading } = useFetch({
    url: "https://fakestoreapi.com/products",
  });

  loading && <Loading />;

  return (
    <div className={s.productList}>
      {data?.map((prod) => {
        return (
          <div className={s.productItem} key={prod.id}>
            <div>
              <img src={prod.image} alt="" />
            </div>

            <div className={s.descr}>
              <h2>
                {prod.title.lenght !== 2 ? prod.title.slice(0, 20) : prod.title}
              </h2>
              <div className={s.price}>
                <span>{prod.price}$</span>
                <div>
                  <span>
                    <FaRegHeart />
                  </span>
                  <span>
                    <MdOutlineShoppingCart />
                  </span>
                </div>
              </div>
            </div>
            <Button
              click={() => navigate(`${ROUTES.products}/${prod.id}`)}
              text="More..."
            />
          </div>
        );
      })}
    </div>
  );
};
export default Products;
