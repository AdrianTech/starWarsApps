import React from "react";
import ShowHeroes from "./showHeroes";
import { StarWars } from "../context/context";
import Favorites from "./FavoriteBar";
import ShowInfo from "./showInfo";
import ShowDetails from "./showDetails";
const Main = (): JSX.Element => {
  const {
    characters,
    message,
    infoState,
    showDetailsModal,
    handleInput,
    getUser,
    chooseArr,
    handleArrays
  } = React.useContext(StarWars);
  console.log(characters);
  return (
    <div className="wrapper">
      {chooseArr ? (
        <div className="search-bar">
          <input type="text" name="value" onChange={handleInput} />
          <button onClick={getUser}>
            <i className="fas fa-search"></i>
          </button>
          <button onClick={() => handleArrays(false)}>Back To List</button>
        </div>
      ) : (
        <div className="search-bar" style={{ justifyContent: "flex-end" }}>
          <button className="btn-show-search" onClick={handleArrays}>
            Show Search Bar<i className="fas fa-search"></i>
          </button>
        </div>
      )}
      {showDetailsModal && <ShowDetails />}
      {infoState && <ShowInfo message={message} />}
      <Favorites />
      {characters && <ShowHeroes />}
    </div>
  );
};
export default Main;
