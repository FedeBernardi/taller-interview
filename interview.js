function minimumChange(coins) {
  coins.sort((a, b) => a - b);

  let currentValue = 0;
  for (let coin of coins) {
    if (coin > currentValue + 1) return currentValue + 1;
    
    currentValue += coin;
  }

  return currentValue + 1;
}


console.log(minimumChange([5, 7, 1, 1, 2, 3, 22]));
console.log(minimumChange([1, 1, 1, 1, 1]));

function squareArray(numbers) {
  if (!numbers.length) {
    console.log('you need to send me an Array');
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      console.log('please send numbers only');
      return;
    }
  }

  return numbers.map(n => n * n).sort((a, b) => a - b);
}

console.log(squareArray([1, 2, 3, 5, 6, 8, 9]));
console.log(squareArray([-2, -1]));
console.log(squareArray([-10, -5, 0, 5, 10]));
console.log(squareArray({}));
console.log(squareArray([2, 3, 'a']));