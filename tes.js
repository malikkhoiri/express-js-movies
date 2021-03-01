// Refractor from original code
function findFirstStringInBracket(str) {
  // Get substring from after "(" index to ")" index
  const word = str.substring(str.indexOf("(") + 1, str.indexOf(")"))
  return word || ''
}

// Regex version
function regexFindFirstStringInBracket(str) {
  // Match all string in bracket
  const words = str.match(/\((.+?)\)/g)
  return words ? words[0] : ''
}
