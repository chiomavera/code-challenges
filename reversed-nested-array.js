//printing the items of a nested array in reverse order

let arr = [
  [1, 2, 3], [4, 5, 6],  [7, 8, 9 ]
  ];

arr.reverse()

for (let i = 0; i < arr.length; i++) {
  arr[i].reverse();
  for(let j = 0; j < arr[i].length; j++) { 
    console.log(arr[i][j])
  }
  }
