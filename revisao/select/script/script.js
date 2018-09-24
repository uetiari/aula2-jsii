const button = document.querySelector(".select__button");
// criei uma constante pro botão 

button.addEventListener("click", function(evento){
    // criei um evento que escuta o click
    evento.preventDefault();
 //previne o evento padrão apra não jogar informações na nuvem
    const profissao = document.getElementById("selectInputArea");
    //criei a constante para a parte de selecionar as opções
    const select = profissao.options[profissao.selectedIndex];
    // criei uma constante para pegar os opção do index selecionado, nas opções gerais

    if (profissao.selectedIndex === 0) {
        //se a opção selecionada for do index 0
        select.remove();
        //Remove a opção selecionada
    } else if (profissao.selectedIndex === 1) {
        //se não se a opção selecionada for do index 1
        select.remove();
        //remove a opção selecionada
    } else if (profissao.selectedIndex === 2) {
        //senão se a opção selecionada for do index 2
        select.remove();
        // remove a opção selecionada
    } else if (profissao.selectedIndex === 3) {
        //senão se a opção selecionada for do index 3
        select.remove();
        //remove a opção selecionada
    }

})