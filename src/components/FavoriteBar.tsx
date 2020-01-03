import React from "react";
import { StarWars } from "../context/context";
import FavoriteModal from "./FavouriteModal";
const Favorites = () => {
  const { favorites, showDetailsModal } = React.useContext(StarWars);
  const [modal, showModal] = React.useState<boolean>(false);
  console.log(favorites);
  return (
    <>
      {modal && !showDetailsModal && <FavoriteModal showModal={showModal} />}
      <div className="favoriteBar">
        <div className="signboard">
          <span>Star</span>
          <span>Wars</span>
          <span>App</span>
        </div>
        <div className="addCounter" onClick={() => showModal(!modal)}>
          <i
            className="fas fa-heart"
            style={{ color: favorites.length > 0 && "red" }}
          >
            <span>{favorites.length}</span>
          </i>
        </div>
      </div>
    </>
  );
};
export default Favorites;
