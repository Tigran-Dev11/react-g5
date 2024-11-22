import * as S from "./styled.js";
import BasketPageItem from "../../components/basket";
import { useGlobalContext } from "../../hooks/use-global-context";

export const Basket = () => {
  const { basketPageItem } = useGlobalContext();

  return (
    <S.BasketComponent>
      {basketPageItem?.map((item) => {
        return <BasketPageItem key={item.id} item={item} />;
      })}
    </S.BasketComponent>
  );
};

