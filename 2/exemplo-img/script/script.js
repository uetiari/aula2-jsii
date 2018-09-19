// pegar toda lista dos links
const links = document.querySelector(".gallery__nav");
// console.log(links)
// console.log(links.children)
const imagem = document.querySelector(".gallery__image");
// pega a lista de filhos -tamanho dos filhos da variável links
// para passar pelos botões precisa ser fora 
// children é uma lista
for(let i = 0; i < links.children.length; i++){
    // console.log(links.children[i])
    const fio = links.children[i];
    // quando clicar, retorna por qual item passou o for
    fio.addEventListener("click", function (){
        //pega o caminho da imagem no atributo de data-iimage
        
       const img = this.dataset.image;
       //console.log(img)
       imagem.src = img
       document.querySelector(".gallery__image").src = img;
    })
}