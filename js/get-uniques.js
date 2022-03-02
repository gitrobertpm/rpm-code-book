
const getUnique = (arr) => [...new Set(arr)];

// Testing
const arr = [1, 1, 2, 3, 3, 4, 4, 4, 5, 5];
console.log(getUnique(arr));