//     A function that takes a number and multiply the number by 5 raised to the number of digits of the number.

const multiply = (number) => {
  return (number * Math.pow(5, Math.abs(number).toString().length));
}
console.log(multiply(-3));
