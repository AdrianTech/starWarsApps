import React from "react";
import { StarWars } from "../context/context";
import { IChar } from "../types/types";
const FavoriteModal = ({ showModal }) => {
  const { removeFromFavoriteList, favorites, showDetails } = React.useContext(
    StarWars
  );
  let showAddedCharacters: IChar[];
  if (favorites.length > 0) {
    showAddedCharacters = favorites.map((char: IChar, index: number) => {
      return (
        <div className="char" key={char.name}>
          <span onClick={() => showDetails(char.name)}>{char.name}</span>
          <span className="trash" onClick={() => removeFromFavoriteList(index)}>
            <i className="fas fa-trash-alt"></i>
          </span>
        </div>
      );
    });
  }
  return (
    <div className="showFavList">
      {favorites.length < 1 ? (
        <h3> Add Your Favorite Characters</h3>
      ) : (
        <h3>Your Favourite Character</h3>
      )}
      <span className="close-btn" onClick={() => showModal(false)}>
        <i className="far fa-window-close"></i>
      </span>
      {showAddedCharacters}
    </div>
  );
};
export default FavoriteModal;
