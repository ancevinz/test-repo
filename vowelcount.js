function vowel_Count (str) {
  return str.replace(/[^aeiou]/g, '').length
}
console.log(vowel_Count('facebook'))
console.log(vowel_Count('twitter.com'))
