const addRandomGenre = () => {
  const nameOfGenre = ["action", "horror", "crime", "family", "sci-fi"];
  const randomNumber = Math.round(Math.random() * 4);
  return nameOfGenre[randomNumber];
};

export { addRandomGenre };
