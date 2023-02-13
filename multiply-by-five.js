// create array of numbers and multiply each number by five and print the resulting ouput.

const mutiplyByFive = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
     output.push(arr[i] * 5);
  }
  return output;
}
let result = mutiplyByFive([1, 2, 3, 4, 5]);
console.log(result);
