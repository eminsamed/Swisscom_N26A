const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [1, 3, 8];

let unique1 = numbers1.filter(
  (o) => numbers2.indexOf(o) === -1
);
let unique2 = numbers2.filter(
  (o) => numbers1.indexOf(o) === -1
);

const unique = unique1.concat(unique2);

console.log(unique);
