var xadrez = function (linhas) {
  var x = "# # # #";  // Toda linha vai ter esse padrão
  var space = " ";    // Espaço antes de cada linha de numero ímpar

  for (var i = 0; i < linhas; i++) {
    if (i % 2 == 0)
      console.log(x);
    else
      console.log(space + x);
  }
}

xadrez(5);
