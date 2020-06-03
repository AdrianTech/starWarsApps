import React from "react";
let isNextPage: string;
import { IChar } from "../types/types";

export const StarWars = React.createContext(null);
const StarWarsContextProvider = (props: any) => {
  const [characters, saveData] = React.useState<IChar[]>([]);
  const [favorites, handleWithFavoriteList] = React.useState<IChar[]>([]);
  const [page, showNextPage] = React.useState<number>(1);
  const [info, showInfo] = React.useState<object>({});
  const [showDetailsID, handleShowDetailsID] = React.useState(null);
  const [showDetailsModal, detailsModal] = React.useState<boolean>(false);
  const [value, handleValue] = React.useState<string>("");
  const [chooseArr, handleArrays] = React.useState<boolean>(false);
  const [searchArray, displaySearchArray] = React.useState<IChar[]>([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://swapi.dev/api/people/?page=${page}`, {
          headers: {
            "Content-type": "Application/json"
          }
        });
        const data = await res.json();
        isNextPage = data.next;
        const concatArr = [...characters, ...data.results];
        let i = {};
        const filtered = concatArr.filter(obj => !i[obj.name] && (i[obj.name] = true));
        saveData(filtered);
      } catch (err) {
        displayInfo({ text: "Something went wrong. Try again", state: true });
      }
    };
    getData();
  }, [page]);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    handleValue(e.target.value);
  };
  const getUser = async (): Promise<IChar[]> => {
    let newArr: IChar[];
    const findCharInArray = characters.find(item => item.name.toLowerCase() === value.toLowerCase());
    if (findCharInArray !== undefined) {
      newArr = [{ ...findCharInArray }];
    }
    displaySearchArray(newArr);
    if (findCharInArray) return;
    try {
      const res = await fetch(`https://swapi.dev/api/people/?search=${value}`, {
        headers: {
          "Content-type": "Application/json"
        }
      });
      const data = await res.json();
      const newArr = [...data.results];
      displaySearchArray(newArr);
    } catch (err) {
      showInfo({ Text: "Something went wrong. Try again", state: true });
    }
  };
  const addFavoriteCharacters = (e: Event, char: IChar): void => {
    if (showDetailsModal) return;
    e.stopPropagation();
    if (favorites.find(item => item.name === char.name)) {
      return displayInfo({
        text: "You've already added this character",
        state: true
      });
    }
    if (!characters.find(item => item.name === char.name)) {
      const addChar = [{ ...char }, ...characters];
      saveData(addChar);
    }
    const updateArr = [...favorites, { ...char }];
    displayInfo({ text: "Added this character", state: true });
    handleWithFavoriteList(updateArr);
  };
  const removeFromFavoriteList = (index: number): void => {
    const updateArr = [...favorites];
    updateArr.splice(index, 1);
    handleWithFavoriteList(updateArr);
  };
  const displayInfo = (info: any): void => {
    showInfo(info);
    setTimeout(() => {
      showInfo({ text: "", state: false });
    }, 1700);
  };
  const showDetails = (id: string): void => {
    handleShowDetailsID(id);
    detailsModal(true);
  };
  return (
    <StarWars.Provider
      value={{
        characters,
        page,
        showNextPage,
        addFavoriteCharacters,
        favorites,
        removeFromFavoriteList,
        isNextPage,
        info,
        showDetailsID,
        showDetails,
        showDetailsModal,
        detailsModal,
        value,
        handleInput,
        getUser,
        searchArray,
        chooseArr,
        handleArrays
      }}
    >
      {props.children}
    </StarWars.Provider>
  );
};
export default StarWarsContextProvider;
