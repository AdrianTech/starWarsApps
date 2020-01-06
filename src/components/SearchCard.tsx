import React from "react";
import { StarWars } from "../context/context";
import image from "../assets/starWars.jpg";
import { ICard } from "../types/types";
const Card: React.FC<ICard> = props => {
  const { addFavoriteCharacters, showDetailsModal } = React.useContext(
    StarWars
  );
  const [rotateCard, handleRotateCard] = React.useState<boolean>(false);
  let fStyle: string;
  let bStyle: string;
  if (rotateCard) {
    fStyle = "perspective(1000px) rotateY(-180deg) translateX(-50%)";
    bStyle = "perspective(1000px) rotateY(0) translateX(-50%)";
  }
  return (
    <>
      <div
        className="card"
        onClick={() => handleRotateCard(!showDetailsModal && !rotateCard)}
      >
        <div className="front" style={{ transform: fStyle }}>
          <div className="img-box">
            <img src={image} alt="Star Wars" />
          </div>
          <h4>{props.char.name}</h4>
          <button
            className="add-to-fav"
            onClick={e => addFavoriteCharacters(e, props.char)}
          >
            <i
              className="fas fa-heart"
              style={{ color: props.char.color === "red" && "red" }}
            ></i>
          </button>
        </div>
        <div className="back" style={{ transform: bStyle }}>
          <h4>{props.char.name}</h4>
          <h4>Birth Year: {props.char.birth_year}</h4>
          <h4>Height: {props.char.height}</h4>
          <h4>Weight: {props.char.mass}</h4>
          <h4>Hair Color: {props.char.hair_color}</h4>
          <h4>Skin Color: {props.char.skin_color}</h4>
        </div>
      </div>
    </>
  );
};
export default Card;
