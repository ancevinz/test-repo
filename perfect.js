function perfect (number) {
  var x = 0
  for (var i = 1; i < number; i++) {
    if (number % i === 0) {
      x += i
    }
  }

  if (x === number) {
    console.log(+number + ' is perfect number.')
  } else {
    console.log(+number + ' is not a perfect number.')
  }
}
perfect(6)
