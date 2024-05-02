let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  let chute = document.querySelector("input").value;
  let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
  let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute < numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é maior.");
    } else {
      exibirTextoNaTela("p", "O número secreto é menor.");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
