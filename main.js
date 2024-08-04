const inicio = document.querySelector(".inicio");
const fim = document.querySelector(".fim");
const btnInicio = document.getElementById("btnInicio");
const btnFim = document.getElementById("btnFim");
const pFrase = document.getElementById("frase");

const lista = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Acredite em você mesmo e em todo o seu potencial.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "A persistência é o caminho do êxito.",
  "Não espere por oportunidades, crie-as.",
  "Grandes realizações não são feitas por impulso, mas por uma soma de pequenas realizações.",
  "A coragem não é a ausência do medo, mas a capacidade de agir apesar dele.",
  "Você é mais forte do que imagina, acredite em você.",
  "A chave para o sucesso é focar nas metas, não nos obstáculos.",
  "Não importa a velocidade com que você avança, desde que você não pare.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
];

function gerarFrase() {
  let frase = lista[Math.floor(lista.length * Math.random())];
  return frase;
}

function clickInicio() {
  inicio.classList.toggle("principal");
  fim.classList.toggle("principal");
  pFrase.innerText = gerarFrase();
}

function clickFim() {
  inicio.classList.toggle("principal");
  fim.classList.toggle("principal");
}

function clickEnter(e) {
  if (e.key == "Enter" && inicio.classList.contains("principal")) {
    clickFim();
  }
}

btnInicio.addEventListener("click", clickInicio);
btnFim.addEventListener("click", clickFim);
document.addEventListener("keydown", clickEnter);
