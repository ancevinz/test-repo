function front_back (str) {
  var first = str.substring(1, 4)
  var second = str.substring(0, 1)
  return first + second + 'ay'
}
console.log(front_back('the'))
console.log(front_back('fox'))
