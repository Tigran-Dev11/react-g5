import s from "./home.module.scss";
import { IMAGES } from "../../assets/images";
import { HiShoppingCart } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <div className={s.home}>
      <div className={s.top}>
        <div className={s.leftSide}>
          <div className={s.smallImg}>
            <div>
              <img src={IMAGES.img1} alt="image" />
            </div>

            <div>
              <img src={IMAGES.img3} alt="image" />
            </div>
          </div>
          <div className={s.bigImg}>
            <img src={IMAGES.img2} alt="image" />
          </div>
        </div>

        <div className={s.rightSide}>
          <h2>Bada Boom </h2>
          <h2>Bada Pow</h2>
          <h2>$74.99</h2>
          <div className={s.wrapper}>
            <div className={s.sizes}>
              size:
              <span>S</span>
              <span>M</span>
              <span>L</span>
              <span>XL</span>
              <span>XXL</span>
            </div>
            <p>
              A contemporary design crafted to catch attention while still
              blending in with the crowd. Super comfy and lightweight makes it
              perfect for any ocassion.
            </p>
            <button className={s.addButton}>
              <HiShoppingCart />
              Add To Basket
            </button>
          </div>
        </div>
      </div>
      <button className={s.shop}>SHOPE MORE LOOKS</button>
      <div className={s.bottom}>
        <div className={s.topPart}>
          <img src={IMAGES.img4} alt="image" />
          <div className={s.descr}>
            <h3>SUBTLE BREEZE</h3>
            <div className={s.arrow}>/</div>
            <span>$89.99</span>
            <button>
              Check it out <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
        <div className={s.bottomPart}>
          <div className={s.descr}>
            <h3>DANS MACHINE</h3>
            <span>$79.99</span>
            <button>
              Check it out <IoIosArrowRoundForward />
            </button>
          </div>

          <img src={IMAGES.img5} alt="image" />
          <img src={IMAGES.img6} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
