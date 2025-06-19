const largeArray = Array(1000000).fill().map(() => Math.random());
const arLen = largeArray.length;
function testForLoop() {
  let sum = 0;
  for (let i = 0; i < largeArray.length; i++) {
    sum += largeArray[i];
  }
  return sum;
}

function testForEach() {
  let sum = 0;
  largeArray.forEach(item => {
    sum += item;
  });
  return sum;
}

function testReduce() {
  return largeArray.reduce((acc, val) => acc + val, 0);
}

function testWhile() {
  let sum = 0;let i = arLen-1;
  while (i>0) {
    sum+= largeArray[i]
    i--
  }
  return sum;
}

console.time('testForLoop')
testForLoop()
console.timeEnd('testForLoop')

console.time('testForEach')
testForEach()
console.timeEnd('testForEach')

console.time('testReduce')
testReduce()
console.timeEnd('testReduce')


console.time('testWhile')
testWhile()
console.timeEnd('testWhile')
