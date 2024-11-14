import Button from "../../../common/button";
import "./style.css"

export const Info = ({ item }) => {
  const { title, firstSubTitle, secondSubTitle, image } = item;

  return (


    <div className="infoBox">
      <div className="infoPart">
        <h1 className="infoBoxTitle">{title}</h1>
        <p className="infoBoxSubTitle">{firstSubTitle}</p>
        <p className="infoBoxSubTitle">{secondSubTitle}</p>
        <Button text="Road more" />
      </div>
      <div className="imagePart">
        <img className="image" src={image} alt="InfoImage" />
      </div>
    </div>
  );
};
