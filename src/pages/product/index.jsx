import s from "./product.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../../common/button";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../loading";

const Product = () => {
  const { prodId } = useParams();
  const navigate = useNavigate();
  const {data, loading} = useFetch({url: `https://fakestoreapi.com/products/${prodId}`})
 

 
  if(loading) {
    return <Loading />
  }
  

  return (
    <div className={s.cardWrapper}>
      <Button click={() => navigate(-1)} text={<IoIosArrowBack />} />

      {data ? (
        <div className={s.productCard}>
          <h2>{data.title}</h2>
          <img src={data.image} alt="" />
          <div className={s.text}>
            <div>{data.description}</div>
          </div>
        </div>
      ) : (
        <h1>This product is not listed</h1>
      )}
    </div>
  );
};
export default Product;
