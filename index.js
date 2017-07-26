var number = process.argv[2] || 200011
var output = []
var sNumber = number.toString()
var len = sNumber.length

for (var i = 0; i < len; i += 1) {
  output.push(+sNumber.charAt(i))
}

console.log(output)
