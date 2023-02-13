//  write a function that takes a String and returns an Array/list with the length of each word added to each element.
// String will have at least one element; words will always be separated by a space.
// let word and the word length be separated by space

function addLength(str) {
return str.split(' ').map(word => `${word} ${word.length}`);
}

const inputString = 'This is big day';
const output = addLength(inputString);
console.log(output);
