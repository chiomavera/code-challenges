// function that reverses the words in a string, but not the individual characters making up the words:

function reverseWords(str){
  return str.split(" ").reverse().join(' '); 
}

let output = reverseWords("The greatest victory is that which requires no battle");

console.log(output);
