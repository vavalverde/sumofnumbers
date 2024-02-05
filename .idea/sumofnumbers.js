const numbers = [1, 2, 3, 4];
// eslint-disable-next-line no-shadow
function sumFor(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumFor(numbers));
// eslint-disable-next-line no-shadow
function sumWhile(numbers) {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(numbers));
// eslint-disable-next-line no-shadow
function sumRecursion(numbers, index = 0) {
  if (index === numbers.length) {
    return 0;
  }
  return numbers[index] + sumRecursion(numbers, index + 1);
}
console.log(sumRecursion(numbers));
// eslint-disable-next-line no-shadow
function sumTheSimpleWay(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumTheSimpleWay(numbers));
