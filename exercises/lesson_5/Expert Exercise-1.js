function gcd_two_numbers(x, y) {
  if (typeof x !== "number" || typeof y !== "number")
    return false;
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
  "The greatest common divisor of " +
    8 +
    " and " +
    6 +
    " is: " +
    gcd_two_numbers(8, 6)
);
console.log(
  "The greatest common divisor of " +
    42 +
    " and " +
    56 +
    " is: " +
    gcd_two_numbers(42, 56)
);
console.log(
  "The greatest common divisor of " +
    96 +
    " and " +
    132 +
    " is: " +
    gcd_two_numbers(96, 132)
);
