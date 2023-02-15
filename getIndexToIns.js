//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
//The returned value should be a number.

const getIndexToIns = (arr, num) => {
  let index = 0;
for (let i = 0; i < arr.length; i++){
    if(arr[i] < num){
      index++
    }
}
  return index;
}

console.log(getIndexToIns([40, 60], 50));
