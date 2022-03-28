import { USER_ADD_FAVORITE, USER_REMOVE_FAVORITE } from "./types";

const initialState = {
  userName: "David",
  favorites: ["1", "2", "4"],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case USER_REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favoriteId) => favoriteId !== payload
        ),
      };
    default: {
      return state;
    }
  }
}
