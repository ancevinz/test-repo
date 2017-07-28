function testhundred (x) {
  return ((Math.abs(200 - x) <= 50) ||
(Math.abs(500 - x) <= 50))
}
console.log(testhundred(150))
console.log(testhundred(90))
console.log(testhundred(100))
console.log(testhundred(10))
console.log(testhundred(180))
