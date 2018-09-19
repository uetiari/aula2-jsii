const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmail2 = document.getElementById("cadastroInputEmailConfirm");
const inputSenha = document.getElementById("cadastroInputPassword");
const inputSenha2 = document.getElementById("cadastroInputPasswordConfirm");
const inputTelefone = document.getElementById("cadastroInputPhone");
const inputNews = document.getElementById("cadastroInputNews");

const button = document.querySelector(".cadastro__button");

const inputArea = document.getElementById("cadastroInputArea");
const inputLevel = document.getElementsByName("level");

button.addEventListener("click", function (evento){
  evento.preventDefault();

    const optionSelect = inputArea.options [inputArea.selectedIndex]
    let radioItem;
    for(let i = 0; i < inputLevel.length; i++) {
        radioItem = inputLevel[i]
    }
    
  if (inputNome.value === "" || inputNome.value === " " || inputNome.value === undefined || inputNome.value === null) {
    inputNome.focus();
    return false
  } 
  else if (inputEmail.value === "" || inputEmail.value === " " || inputEmail.value === undefined || inputEmail.value === null) {
    inputEmail.focus();
    return false
  }
  
  else if (inputEmail2.value === "" || inputEmail2.value === " " || inputEmail2.value === undefined || inputEmail2.value === null) {
    inputEmail2.focus();
    return false
  }

  else if (inputSenha.value === "" || inputSenha.value === " " || inputSenha.value === undefined || inputSenha.value === null){
    inputSenha.focus();
    return false
  } 
  else if (inputSenha2.value === "" || inputSenha2.value === " " || inputSenha2.value === undefined || inputSenha2.value === null){
    inputSenha2.focus();
    return false
  } 
  else if (inputTelefone.value === "" || inputTelefone.value === " " || inputTelefone.value === undefined || inputTelefone.value === null){
    inputTelefone.focus();
    return false
  }
  else if (inputEmail2.value !== inputEmail.value ){ //comparar se é diferente os e-mails e não deixa prosseguir
    inputEmail.focus();
    return false
  } 
  else if (inputSenha2.value !== inputSenha.value) {
    alert("Senha diferente");
    inputSenha.focus();
    return false
  }
  else if (inputSenha.value.length < 7 ){
    alert("Tem que ter 7 ou mais dígitos");
    return false
  }  

  if (radioItem.value === "Junior"){
      console.log ("0 - 2 anos de experiencia;")
    } else if (radioItem.value === "Pleno"){
      console.log ("2 - 5 anos de experiencia;")
    } else if (radioItem.value === "Senior"){
      console.log ("5+ anos de experiencia;")
    }

  document.querySelector("body").style.backgroundColor = "#fff";
  const form = this.closest("form");
  form.submit();
})

// trocar a cor de fundo quando escolher o nível de conhecimento
inputArea.addEventListener("change", function(){
  if(inputArea.selectedindex === 0) {
    document.querySelector("body").style.backgroundColor = "blue";
  } else if (inputArea.selectedIndex === 1) {
    document.querySelector("body").style.backgroundColor = "green";
  } else if (inputArea.selectedIndex === 2) {
    document.querySelector("body").style.backgroundColor = "pink";
  } else if (inputArea.selectedIndex === 3) {
    document.querySelector("body").style.backgroundColor = "orange";
  }
})

// para evitar o colar na confirmação do email
inputEmailConfirm.addEventListener("paste", function(event){
  event.PreventDefault();
  return false;
})