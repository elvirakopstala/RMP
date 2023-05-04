import { reactLocalStorage } from "reactjs-localstorage";

export const USER_ADDED_COLOR_KEY = "added-colors";

export const getColorsListFromLS = () => {
  const colorList = reactLocalStorage.get(USER_ADDED_COLOR_KEY);

  if (!colorList) {
    return [];
  }

  return JSON.parse(colorList).state.colors;
};

export const setColorsListFormLS = (colorsList) => {
  const prevList = getColorsListFromLS();

  if (prevList.lenght !== 0) {
    reactLocalStorage.set(USER_ADDED_COLOR_KEY, JSON.stringify([...prevList, ...colorsList]));
  }

  reactLocalStorage.set(USER_ADDED_COLOR_KEY, JSON.stringify([colorsList]));
};
