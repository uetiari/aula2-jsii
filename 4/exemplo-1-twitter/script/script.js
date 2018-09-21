const button = document.querySelector(".tweet-composer__button"); //pega botão
const tweet = document.getElementById("tweetComposerInput"); //pega caixa de ttexto

button.addEventListener("click", function(event){
  event.preventDefault();

  const tweet2 = document.querySelector(".tweets-timeline"); //pega timeline do tweet

  // verifica se está vazio e não deixa mandar mensagem
  if(tweet.value === undefined || tweet.value === null || tweet.value === "" || tweet.value === " "){
    return false;
  }
 
  // cria data automática
  const date = new Date ();
  const month = date.toLocaleDateString ("pt-BR", { //criação do mês escrito nome
    month: "short" }); // forma que mostra o mês abreviado
  const day = date.getDate();  // mostra o dia
  const ano = date.getUTCFullYear(); // mostra o ano
  const hora = date.getHours(); // mostra as horas 
  const min = date.getMinutes(); //mostra minutos

  const div = document.createElement("div") // div que vai abraçar todo conteúdo
  div.className = "tweets-timeline__box"; // div que deixará tudo dentro do fundo branco

 
  const texto = document.createElement("p"); //cria parágrafo novo para adicionar 
    texto.innerHTML = tweet.value; // coloca o texto na div criada acima
 
  // outra opção --------------
  //const parag2 = document.createTextNode(tweet.value);
  //texto.appendChild(parag2);
  // ---------------------------
  
  const header = document.createElement("div"); // criei um div pra inserir header
  header.className = "tweets-timeline__header";
  
  //insere header do html
  header.innerHTML = `<span class="tweets-timeline__name">Nome Sobrenome</span> 
  <span class="tweets-timeline__username">@username</span>
  <span class="tweets-timeline__date">${day} de ${month} de ${ano} às ${hora}:${min}</span>`
  
  const footer = document.createElement("div"); //criei um div pra inserir footer
  footer.className = "tweets-timeline__footer";
  
  //insere o footer do html
  footer.innerHTML = `<div class="tweets-timeline__footer">
  <button>Excluir</button>
  </div>`
  //segunda opção de criar botão
  //<button class="tweets-timeline__footer">Excluir</button>
 
  div.appendChild(header); //adiciona header na div
  div.appendChild(texto); //adiciona texto na div
  div.appendChild(footer); //adiciona footer na div
  
  tweet2.insertBefore(div, tweet2.childNodes[0] ); // coloca na timeline sempre antes do primeiro
  //sempre mais atual acima

  //para deixar campo de escrita limpo após enviar tweet
  tweet.value = "";
  
  // como exclui os tweets postados
  const clear = document.querySelector(".tweets-timeline__footer");
    clear.addEventListener("click", function(eventClear){
      eventClear.preventDefault();
      div.remove(); // remover 
    })

})

//contador de caracteres
tweet.addEventListener("keyup", function(){
  const textBox = this;
  const maxLength = 280;
  const contador = document.getElementById ("tweetComposerCounter");

  contador.innerHTML = maxLength - textBox.value.length; //vai contando os caracteres restantes

  const caractDisp = maxLength - textBox.value.length;
   // contador.innerHTML = caractDisp;

   // se chegar os caracteres menor igual a 15
  if (caractDisp <= 15){
    //os caracteres restantes vão ficar vermelho
    contador.style.color = "red";
  } else {
    // senão o contador continua branco
    contador.style.color = "white";
  }
  // se o caracteres for menor que zero
  if (caractDisp < 0 ) {
    //desabilita o botão do tweet (usou td espaço dos caracteres)
    button.disabled = true;
  } else {
    //senão ele continua habilitado  para postar 
    button.disabled = false;
  }

})
