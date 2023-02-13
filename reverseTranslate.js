// create an array of numbers and translate each number to words e.g 1 = one and reverse the array.

const reverseTranslate =  (arr) => {
  let output = [ ];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
     output.push('One');
  }
    if (arr[i] === 2) {
     output.push('Two');
  }
    if (arr[i] === 3) {
     output.push('Three');
  }
    if (arr[i] === 4) {
     output.push('Four');
  }
  }
  
  return output.reverse();
}

console.log(reverseTranslate([1, 2, 1, 2]))
