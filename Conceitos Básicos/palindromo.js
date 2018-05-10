var palindromo = function (word) {

  // Armazena a palavra ao contrário
  var wordReverse = "";

  for (let i = word.length-1; i >= 0; i--) {
    wordReverse += word[i];
  }

  if (wordReverse == word)
    return true;
  else
    return false;

}

console.log(palindromo("subinoonibus"));
