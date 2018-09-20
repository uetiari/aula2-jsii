const button = document.querySelector(".tweet-composer__button"); //pega botão

button.addEventListener("click", function(event){
  event.preventDefault();

  const tweet = document.getElementById("tweetComposerInput"); //pega caixa de ttexto
  const tweet2 = document.querySelector(".tweets-timeline"); //pega timeline do tweet

  // verifica se está vazio e não deixa mandar mensagem
  if(tweet.value === undefined || tweet.value === null || tweet.value === "" || tweet.value === " "){
    return false;
  }

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
  <span class="tweets-timeline__date">Dia de Mês</span>`
  
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
  
  tweet2.insertBefore(div, tweet2.childNodes[0] ); // coloca na timeline semmpre antes do primeiro
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