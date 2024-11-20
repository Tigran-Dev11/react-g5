import "./style.css"

export const GameCenter=({item})=>{
    const{image}=item
    return (
      <div className="imagePlace">
        <img className="image" src={image} alt="GameCenterImage" />
      </div>
    );
}

