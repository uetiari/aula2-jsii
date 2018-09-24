const botaoAumenta = document.querySelector(".botao_aumenta");
// criei uma constante pro botão de Aumentar
const botaoDiminui = document.querySelector(".botao_diminui");
//criei uma constante pro botão de Diminuir
const artigo = document.querySelector(".article__p");
//criei uma constante para a DIV onde estão os P's
let texto = 16
// declarei um padrão de tamanho, que existe no CSS

botaoAumenta.addEventListener("click", function(aumenta){
    //criei um escutador de evento para o click do botão quando aumentar
    aumenta.preventDefault();
    //previni o evento padrão de jogar dados na nuvem
    texto ++
    //outra forma :
    //texto = texto + 1

    //toda vez que clicar, aumenta 1 no valor da let TEXTO
    artigo.style.fontSize = `${texto}px`
    // aqui eu defino que o tamanho da fonte, da constante artigo, será o valor da constante TEXTO em forma de pixel.
    // aqui que p código entende que será aumentado o tamanho da fonte
  
})


botaoDiminui.addEventListener("click", function(diminui){
    //criei um escutador de evento para o click do botão quando aumentar
    diminui.preventDefault();
    //previni o evento padrão de jogar dados na nuvem
    texto --
    //outra forma :
    //texto = texto 1 1
    
    //toda vez que clicar, diminui 1 no valor da let TEXTO
    artigo.style.fontSize = `${texto}px`
    // aqui eu defino que o tamanho da fonte, da constante artigo, será o valor da constante TEXTO em forma de pixel.
    // aqui que p código entende que será aumentado o tamanho da fonte
})
