// Method to get all substrings
const getSubstrings = str => {
  // Array to store substrings
  const ssArr = [...s];
  
  // Create key for while loop
  let key = 2;
  
  // While key is < str.length
  while (key < str.length) {
      
      // Iterate over str
      for (let i = 0; i + key < str.length + 1; i++) {
          // Push substring i through i + key to ssArr
          ssArr.push(str.substring(i, i + key));
          //console.log([str.substring(i, i + key), i, key]);
      }
      
      // Increment key
      key++;
  }
  
  // console.log(ssArr);
}

const subs = getSubstrings(s);