
// How many combinations of 1, 2, and 3 exist in s steps?
const steps = (s) => {

  if (s === 0 || s === 1) {
    return 1;
  }

  if (s === 2) {
    return 2;
  }
  
  return steps(s - 3) + steps(s - 2) + steps(s - 1);
}
  
// Some test cases
console.log(steps(3)); // 4
console.log(steps(4)); // 7
console.log(steps(5)); // 13
console.log(steps(16)); // 10609
