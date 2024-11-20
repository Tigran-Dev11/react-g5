import { useNavigate } from "react-router-dom";
import { MENU } from "../../utils/constant";
import { useGlobalContext } from "../../hooks/use-global-context";
import { IMAGES } from "../../assets/images";
import "./style.css";

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
    <div key={product.id} className="product-item">
      <img src={product.image} alt="ProductPicture" className="product-image" />
      <h1 className="pruductTitle">{product.title}</h1>
      <button
        className="learnMore"
        onClick={() => {
          navigation(`${MENU.PRODUCTS}/${product.id}`);
        }}
      >
        learn more...
      </button>

      <div className="card-top-part">
        <div className="quentitySelector">
          <div>
            <span>${product.price}</span>
          </div>
          <button className="basketIcon" click={addBasket}>
            <img className="basket" src={IMAGES.basketIcon} alt="BasketIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

