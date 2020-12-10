const getUniqueGenre = (arr) => {
  const Genres = Array.from(arr, ({ Genre }) => Genre);
  return [...new Set(Genres)];
};

export { getUniqueGenre };
