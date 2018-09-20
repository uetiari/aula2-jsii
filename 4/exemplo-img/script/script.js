const links = document.querySelector(".gallery__nav");
const imagem = document.querySelector(".gallery__image");
const desc = document.querySelector(".gallery__caption");

for(let i = 0; i < links.children.length; i++){
  const fio = links.children[i];
  fio.addEventListener("click", function (){
    const img = this.dataset.image;
    imagem.src = img
    // outra forma de fazer o mesmo acima
    //document.querySelector(".gallery__image").src = img;
    //para trocar o título junto com a imagem
    const title = this.dataset.title;
    desc.textContent = title;
    // desc.innerHTML = title
    })

}