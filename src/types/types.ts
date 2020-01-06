export interface IChar {
  birth_year: string;
  color: string;
  created: string;
  edited: string;
  eye_color: string;
  films?: Array<string>;
  gender: number;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species?: Array<string>;
  starships?: Array<string>;
  url: string;
  vehicles?: Array<string>;
}
export interface ICard {
  char: IChar;
  index: number;
}
