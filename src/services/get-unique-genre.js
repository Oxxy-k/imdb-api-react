const getUniqueGenre = (arr) => {
  let result = [];
  let keyOfObj = [];
  for (let i = 0; i < arr.length; i++) {
    const { Genre } = arr[i];
    keyOfObj.push(Genre);
  }
  for (let str of keyOfObj) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
};

export { getUniqueGenre };
