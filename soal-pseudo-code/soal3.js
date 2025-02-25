function printStars(x) {
  let result = '';
  for (let i = 1; i <= x; i++) {
    result += '* '.repeat(i).trim() + '\n';
  }
  console.log(result);
}

let x = 5;
printStars(x);
