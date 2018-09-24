const button = document.querySelector("button");
//cria uma constante para o botão
const link = document.getElementById("externo");
// cria uma constante para o link
const artigo = document.querySelector(".article");
// cria uma constante para a DIV article
button.addEventListener("click", function(event){
    // cria um escutador do evento click para o botão
    event.preventDefault();
    // previne o evento padrão  
   for (let i = 0; i < 6; i++){
        //outra opção
        //for (let i = 0; i < link.attributes.length; i++) {
        //cria um for para 6, porque são 6 itens para verificar
        let prop = document.createElement("p")
        // cria um parágrafo para cada atributo que vai listar
        prop.innerHTML = (`${link.attributes[i].name} : ${link.attributes[i].value}`)
        //na variável PROP será mostrado o Nome dos atributos : Valor dos atributos da constante Link
        artigo.appendChild(prop)
        //o resultado da variável PROP será adicionada na constante ARTIGO
    }
 
})

