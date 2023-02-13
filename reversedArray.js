
const reversedArray =  (arr) => {
  let output = [ ];
  for (let i = arr.length - 1; i > 0; i--) {
    output.push(arr[i]);
  }
  return output;
}

console.log(reversedArray([1, 2, 3, 4, 5]))
