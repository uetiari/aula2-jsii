const button = document.querySelector(".sidebar-menu__button");
const sidebar = document.querySelector(".sidebar-menu");

button.addEventListener("click", function(event){
    event.preventDefault();

console.log(sidebar.classList)
//classList - dá uma lista de classes no console do elemento que estou pedindo
    if(sidebar.classList.contains("sidebar-menu__visible")){ // como se fosse pergunta, returna true ou false
        // se true, entra na próxima linha
        sidebar.classList.remove("sidebar-menu__visible"); // funciona como o Innerhtml; remove no html
        sidebar.classList.add("sidebar-menu__hidden"); // funciona com append; adiciona no html 
    } else {
        sidebar.classList.remove("sidebar-menu__hidden");
        sidebar.classList.add("sidebar-menu__visible");
    }
})