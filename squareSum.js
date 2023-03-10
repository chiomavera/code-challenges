// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 

const squareSum = (numbers) => numbers.map(num => num ** 2).reduce((acc, init) => acc + init, 0);
