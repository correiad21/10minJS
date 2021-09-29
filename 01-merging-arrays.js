// Diferents methods to merge arrays
const numbers = ['1', '2', '3'];
const literals = ['one', 'two', 'three'];

//concat()
const concatMethod = numbers.concat(literals);
console.log(concatMethod); //[ '1', '2', '3', 'one', 'two', 'three' ]

//Spread operator
const spreadArr = [...numbers, ...literals];
console.log(spreadArr);

//this way works too
const spreadArr2 = [...numbers, ...['one', 'two', 'three']];
console.log(spreadArr2);

//Reduce
const reduceMethod = numbers.reduce(function (arr, value){
    arr.push(value);
    return arr;
}, literals);
console.log(reduceMethod);