import React from "react";
import { StarWars } from "../context/context";
import Card from "./Card";
import SearchCard from "./SearchCard";
import { IChar } from "../types/types";
const ShowHeroes = (): JSX.Element => {
  const {
    characters,
    page,
    showNextPage,
    isNextPage,
    favorites,
    chooseArr,
    searchArray
  } = React.useContext(StarWars);
  let displayCards: IChar[];
  if (characters.length > 0 && !chooseArr) {
    characters.filter((char: IChar) => {
      if (favorites.some((char2: IChar) => char.name === char2.name)) {
        return (char.color = "red");
      } else {
        return (char.color = "white");
      }
    });

    displayCards = characters.map((char: IChar, index: number) => {
      return <Card key={index} char={char} index={index} />;
    });
  }
  if (searchArray !== undefined && searchArray.length > 0 && chooseArr) {
    displayCards = searchArray.map((char: IChar, index: number) => {
      return <SearchCard key={index} char={char} index={index} />;
    });
  }
  return (
    <>
      {characters.length < 1 ? (
        <h3 className="waitingMessage">Loading...</h3>
      ) : (
        <div className="showCharacters">{displayCards}</div>
      )}
      {characters.length > 0 && !chooseArr && (
        <div className="nextPage">
          {isNextPage !== null ? (
            <button onClick={() => showNextPage(page + 1)}>
              Show More Characters
            </button>
          ) : (
            <button style={{ opacity: "0.5" }}>No More Characters</button>
          )}
        </div>
      )}
    </>
  );
};
export default ShowHeroes;
