
// Some input
const arr1 = ['a', 'b', 'c', [1, {two: 'three'}, ['x'], ['y', ['z']]]];

/***
 * Flatten an array of arrays
 * Param - Array
 * Returns - flattened array of arrays
 ***/
const flatten = arr => {

  // Handle null input
  if (arr === null || arr.length === 0) {
    return '';
  }

  // Flatten first level
  const flattened = [].concat.apply([], arr); // console.log('FLATTENED ONE LEVEL: ', flattened);

  // Go recursive if nested arrays are found
  if (!flattened.every(a => !Array.isArray(a))) {
    return flatten(flattened);
  }

  // Return flat array if no nested arrays are found
  return flattened;
}

// Call flatten function on provided input arr and store result in variable
const flatArr = flatten(arr1);

// Log original array
console.log('ORIGINAL ARRAY: ', arr1);

// Log flattened array
console.log('FLATTENED ARRAY: ', flatArr);
