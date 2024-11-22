import s from "./notFound.module.scss";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets/images";
const NotFound = () => {
  const navigate = useNavigate();

  const handlerNavigate = () => {
    navigate("/");
  };

  return (
    <div className={s.notFound}>
      <div>
        <h2>Uh, ohh! </h2>
        <h3>We Sincerely Apologize</h3>
        <p>We can’t find the page that you are looking for!</p>
        <button onClick={handlerNavigate}>Go Home</button>
      </div>
      <div>
        <img src={IMAGES.error} alt="" />
      </div>
    </div>
  );
};
export default NotFound;