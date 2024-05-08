let button = document.querySelector("#botao_verificar");

button.addEventListener("click", verificar);
function verificar() {
  let n1 = document.querySelector('#n1').value
  let n2 = document.querySelector('#n2').value
  let n3 = document.querySelector('#n3').value
  let n4 = document.querySelector('#n4').value 
  let p1 = document.querySelector('#p1').value
  let p2 = document.querySelector('#p2').value
  let p3 = document.querySelector('#p3').value
  let p4 = document.querySelector('#p4').value
  let presenca = document.querySelector('#presenca').value
  
  let media = calculaMedia(n1, n2, n3, n4, p1 , p2 , p3 , p4 ).toFixed(2)
  let resultado = verificaAprovacao(media, presenca);       
  
  let resultadoMedia = document.querySelector("#media");
  let resultadoFinal = document.querySelector("#resultado");
  
  resultadoMedia.textContent = media 
  resultadoFinal.textContent = resultado

  resultadoFinal.classList.remove("aprovado", "reprovado");
  
  if (resultado === "Aprovado") {
    resultadoFinal.classList.add("aprovado");
  } else {
    resultadoFinal.classList.add("reprovado");
  }
 
}


