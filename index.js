const saida = document.querySelector(".text");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 89);
  }
}

digitacao("Olá, meu nome é Eric Johnson e Contruou páginas WEB.", 0);