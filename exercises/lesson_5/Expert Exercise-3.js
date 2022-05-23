function lcm_two_numbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number")
    return false;
  return !x || !y
    ? 0
    : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(
  "The least common multiple of " +
    2 +
    " and " +
    3 +
    " is: " +
    lcm_two_numbers(2, 3)
);
console.log(
  "The least common multiple of " +
    4 +
    " and " +
    6 +
    " is: " +
    lcm_two_numbers(4, 6)
);
console.log(
  "The least common multiple of " +
    10 +
    " and " +
    20 +
    " is: " +
    lcm_two_numbers(10, 20)
);
