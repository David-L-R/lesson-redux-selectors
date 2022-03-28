export const getFavorites = (reduxState) => {
  return reduxState.user.favorites.map((favoriteId) =>
    reduxState.groceries.find((item) => item.id === favoriteId)
  );
};
