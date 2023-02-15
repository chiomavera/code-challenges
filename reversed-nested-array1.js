// creating a nested array in reverse order

let bigarr = []
let extctr = 1;
for (let i = 0; i < 3; i++) {
  let littleArr = [];
  for (let j = 0; j < 3; j++) {
    littleArr.push(extctr);
    extctr++;
    littleArr.reverse()
  }
  bigarr.push(littleArr);
}
bigarr.reverse()
console.log(bigarr);
