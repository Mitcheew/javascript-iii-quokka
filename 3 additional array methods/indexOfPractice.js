var numbers = [2,6,1235,2,3,4,25,3,true, 12];

//Find the index of 12
console.log(numbers.indexOf(12))
//Find the index of 1236
console.log(numbers.indexOf(1236))
//find the indexes of all 3s
let indices = [];
let idx = numbers.indexOf(3);
while(idx != -1) {
    indices.push(idx);
    idx = numbers.indexOf(3, idx + 1)
}
indices