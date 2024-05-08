let button = document.querySelector("#botao_verificar");

button.addEventListener("click", verificar);

function verificar() {
<<<<<<< HEAD
  let n1 = parseFloat(document.querySelector('#n1').value)
  let n2 = parseFloat(document.querySelector('#n2').value)
  let n3 = parseFloat(document.querySelector('#n3').value)
  let n4 = parseFloat(document.querySelector('#n4').value) 
  let p1 = parseFloat(document.querySelector('#p1').value)
  let p2 = parseFloat(document.querySelector('#p2').value)
  let p3 = parseFloat(document.querySelector('#p3').value)
  let p4 = parseFloat(document.querySelector('#p4').value)
  let presenca = document.querySelector('#presenca').value
  
  // let media = calculaMedia(n1, n2, n3, n4, p1 , p2 , p3 , p4 ).toFixed(2)
  // if (media==NaN){
  //   document.querySelector("#media").textContent = "TESTE"
  // }
  // console.log(media)
  let resultado = verificaAprovacao(media, presenca);       
  
=======
  let n1 = document.querySelector('#n1').value;
  let n2 = document.querySelector('#n2').value;
  let n3 = document.querySelector('#n3').value;
  let n4 = document.querySelector('#n4').value;
  let p1 = document.querySelector('#p1').value;
  let p2 = document.querySelector('#p2').value;
  let p3 = document.querySelector('#p3').value;
  let p4 = document.querySelector('#p4').value;
  let presenca = document.querySelector('#presenca').value;

  // CALCULANDO MÉDIA
  let media = calculaMedia(n1, n2, n3, n4, p1, p2, p3, p4);
  media = (isNaN(media) ? 0 : media).toFixed(2);//TRATAMENTO DA MÉDIA CASO FOR 0

  let resultado = verificaAprovacao(media, presenca);

>>>>>>> da2f1b0c680df973173d8b882622fd78ec544fa7
  let resultadoMedia = document.querySelector("#media");
  let resultadoFinal = document.querySelector("#resultado");

  resultadoMedia.textContent = media;
  resultadoFinal.textContent = resultado;

  resultadoFinal.classList.remove("aprovado", "reprovado");

  if (resultado === "Aprovado") {
    resultadoFinal.classList.add("aprovado");
  } else {
    resultadoFinal.classList.add("reprovado");
  }
}
//código abaixo foi gerado por AI
// // Constantes para os IDs dos elementos HTML
// const NOTA1_ID = 'n1';
// const NOTA2_ID = 'n2';
// const NOTA3_ID = 'n3';
// const NOTA4_ID = 'n4';
// const PESO1_ID = 'p1';
// const PESO2_ID = 'p2';
// const PESO3_ID = 'p3';
// const PESO4_ID = 'p4';
// const PRESENCA_ID = 'presenca';
// const MEDIA_ID = 'media';
// const RESULTADO_ID = 'resultado';
// const BOTAO_VERIFICAR_ID = 'botao_verificar';

// // Função para calcular a média
// function calculaMedia(nota1, nota2, nota3, nota4, peso1, peso2, peso3, peso4) {
//   const somaPesos = parseFloat(peso1) + parseFloat(peso2) + parseFloat(peso3) + parseFloat(peso4);
//   const media = ((parseFloat(nota1) * parseFloat(peso1)) +
//                  (parseFloat(nota2) * parseFloat(peso2)) +
//                  (parseFloat(nota3) * parseFloat(peso3)) +
//                  (parseFloat(nota4) * parseFloat(peso4))) / somaPesos;
//   return media;
// }

// // Função para verificar a aprovação
// function verificaAprovacao(media, presenca) {
//   if (media >= 7 && presenca >= 75) {
//     return 'Aprovado';
//   } else {
//     return 'Reprovado';
//   }
// }

// // Função para exibir o resultado
// function exibirResultado(media, resultado) {
//   const resultadoMediaElement = document.getElementById(MEDIA_ID);
//   const resultadoFinalElement = document.getElementById(RESULTADO_ID);

//   resultadoMediaElement.textContent = media.toFixed(2);
//   resultadoFinalElement.textContent = resultado;

//   resultadoFinalElement.classList.remove('aprovado', 'reprovado');
//   if (resultado === 'Aprovado') {
//     resultadoFinalElement.classList.add('aprovado');
//   } else {
//     resultadoFinalElement.classList.add('reprovado');
//   }
// }

// // Função principal para verificar a aprovação
// function verificar() {
//   const nota1 = document.getElementById(NOTA1_ID).value;
//   const nota2 = document.getElementById(NOTA2_ID).value;
//   const nota3 = document.getElementById(NOTA3_ID).value;
//   const nota4 = document.getElementById(NOTA4_ID).value;
//   const peso1 = document.getElementById(PESO1_ID).value;
//   const peso2 = document.getElementById(PESO2_ID).value;
//   const peso3 = document.getElementById(PESO3_ID).value;
//   const peso4 = document.getElementById(PESO4_ID).value;
//   const presenca = document.getElementById(PRESENCA_ID).value;

//   const media = calculaMedia(nota1, nota2, nota3, nota4, peso1, peso2, peso3, peso4);
//   const resultado = verificaAprovacao(media, presenca);

//   exibirResultado(media, resultado);
// }

// // Adiciona o evento de clique ao botão
// document.getElementById(BOTAO_VERIFICAR_ID).addEventListener('click', verificar);