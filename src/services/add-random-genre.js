const addRandomGenre = () => {
  const nameOfGenre = ["action", "horror", "crime", "family", "sci-fi"];
  const randomNumber = Math.floor(Math.random() * 10);
  switch (randomNumber) {
    case 0:
    case 1:
      return nameOfGenre[0];
    case 2:
    case 3:
      return nameOfGenre[1];
    case 4:
    case 5:
      return nameOfGenre[2];
    case 6:
    case 7:
      return nameOfGenre[3];
    case 8:
    case 9:
      return nameOfGenre[4];
    default:
      return false;
  }
};

export { addRandomGenre };
