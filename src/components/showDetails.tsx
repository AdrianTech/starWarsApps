import React from "react";
import { StarWars } from "../context/context";
import { IChar } from "../types/types";
const ShowDetails = (): JSX.Element => {
  const { showDetailsID, favorites, detailsModal } = React.useContext(StarWars);
  let filtered: IChar[];
  if (favorites.length > 0) {
    filtered = favorites.filter((char: IChar) => char.name === showDetailsID);
  }
  const {
    name,
    mass,
    birth_year,
    height,
    skin_color,
    hair_color
  } = filtered[0];
  return (
    <div className="showDetails">
      <span className="close-btn-details" onClick={() => detailsModal(false)}>
        <i className="far fa-window-close"></i>
      </span>
      <div className="content">
        <h4>{name}</h4>
        <h4>Birth Year: {birth_year}</h4>
        <h4>Height: {height}</h4>
        <h4>Weight: {mass}</h4>
        <h4>Hair Color: {hair_color}</h4>
        <h4>Skin Color: {skin_color}</h4>
      </div>
    </div>
  );
};
export default ShowDetails;
