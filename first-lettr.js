function uppercase (str) {
  var array = str.split(' ')
  var narray = []
  for (var x = 0; x < array.length; x++) {
    narray.push(array[x].charAt(0).toUpperCase() + array[x].slice(1))
  }
  return narray.join(' ')
}
console.log(uppercase('lorem ipsum dolor sit amet, consectetuer adipiscing elit.'))
