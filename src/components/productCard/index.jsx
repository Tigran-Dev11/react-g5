import { useNavigate } from "react-router-dom";
import { MENU } from "../../utils/constant";
import { useGlobalContext } from "../../hooks/use-global-content";
import { IMAGES } from "../../assets/images";
import s from "./product.module.scss"


export const ProductCard = ({ product }) => {
  const navigation = useNavigate();
  const { basketItems, setBasketItems } = useGlobalContext();

  const addBasket = () => {
    const basketItem = {
      id: product.id,
      image: product.img,
      title: product.title,
      price: product.price,
      quantity: 1,
    };

    const basketItemExist = basketItems?.find((item) => item.id === product.id);

    if (!basketItemExist) {
      setBasketItems([...basketItems, basketItem]);
      return;
    }

    const updatedBasketItems = basketItems.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });

    setBasketItems(updatedBasketItems);
  };

  return (

    <div key={product.id} className={s.productItem}>
      <img src={product.image} alt="ProductPicture" className={s.productImage} />
      <h1 className={s.pruductTitle}>{product.title}</h1>
      <button
        className={s.learnMore}
        onClick={() => {
          navigation(`${MENU.products}/${product.id}`);
        }}
      >
        learn more...
      </button>

      <div className={s.cardTopPart}>
        <div className={s.quentitySelector}>
          <div>
            <span>${product.price}</span>
          </div>
          <button className={s.basketIcon} click={addBasket}>
            <img className={s.basket} src={IMAGES.basketIcon} alt="BasketIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};
