// outra forma de escrever o item abaixo
// document.getElementById("arrowTop").addEventListener ("click", function (){
const button = document.getElementById("arrowTop");

button.addEventListener ("click", function (){ // chama window para funcionar na página inteira
  window.scrollTo(pageYOffset, 0); // no eixo Y ele roda para o top no caso, 0
})

// adiciona scroll na página 
window.addEventListener("scroll", function (){
  //console.log("Rolou!") // pra saber se funcionou
  console.log(pageYOffset) // page de página e Y relacionado ao eixo y, mostra o tanto que rolou a página
  if(pageYOffset > 450) {
    button.hidden = false;
    return false
  } 
  button.hidden = true;
  
})