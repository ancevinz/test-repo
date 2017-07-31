function frontBack (str) {
  var first = str.substring(1, 4)
  var second = str.substring(0, 1)
  return first + second + 'ay'
}
console.log(frontBack('the'))
console.log(frontBack('fox'))
