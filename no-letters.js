function CharCounts (str1) {
  var char = {}
  str1.replace(/\S/g, function (l) { char[l] = (isNaN(char[l]) ? 1 : char[l] + 1) })
  return char
}
console.log(CharCounts('Lorem ipsum dolor sit amet consectetuer adipiscing elit'))
