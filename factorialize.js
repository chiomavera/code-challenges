//using recursive function

function factorialize(num) {
if (num === 0) {
  return 1;
}
return num * factorialize(num-1)
}

let result = factorialize(5);
console.log(result)


//or

// using for loop

function factorialize(num) {
  let output = 1;
  for (let i = 1; i <= num; i++) {
    
  output *= i;
}
  return output;
}

let result = factorialize(5);
console.log(result)
