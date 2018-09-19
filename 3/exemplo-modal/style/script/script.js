const button = document.querySelector(".login__button");
const buttonClose = document.querySelector(".login-modal__button");

//quando clicar, ativa função event
button.addEventListener("click", function(event){
    //previne evento padrão de jogar infos no limbo
    event.preventDefault();
    //usa a classe da div login-modal e mostra na tela
    document.querySelector(".login-modal").style.display = "flex";
})

//quando clicar, ativa função eventClose
buttonClose.addEventListener("click", function(eventClose){
    //previne evento padrão de jogar infos no limbo
    eventClose.preventDefault();  
    // esconde quando clicar no X da div
    document.querySelector(".login-modal").style.display = "none";
})
