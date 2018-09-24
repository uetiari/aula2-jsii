const botao = document.querySelector(".feedback__button");
//criei botão
botao.addEventListener("click", function(event){
    //adicionei um "escutador" de evento de clique no botão
    event.preventDefault();
    //previni o evento padrão para evitar que solte os dados na nuvem
    const tabela = document.querySelector(".respostas__table");
    // construi uma tabela com imput do html
    const empresa = document.getElementById("feedbackInputName");
    //construi uma constante para pegar o input do espaço da empresa
    const cidade = document.getElementById("feedbackInputMoney");
    //construi uma constante para pegar o input do espaço da cidade
    const comentario = document.getElementById("feedbackInputDate");
    //construi uma constantepara pegar input do espaço comentario

const linha = document.createElement("tr");
//construi uma linha 

const colunaEmpresa = document.createElement("td");
// construi uma coluna Empresa 
const colunaEmpresaTexto = document.createTextNode(empresa.value);
// construi uma constante para o input da Empresa
colunaEmpresa.appendChild(colunaEmpresaTexto);
//adicionei valor do input da Empresa na coluna Empresa

const colunaCidade = document.createElement("td");
// criei uma coluna para Cidade
const colunaCidadeTexto = document.createTextNode(cidade.value);
// criei uma constante para pegar o input da Cidade para a coluna Cidade
colunaCidade.appendChild(colunaCidadeTexto);
// adicionei o input da Cidade na coluna cidade

const colunaComentario = document.createElement("td");
// criei uma coluna Comentário
const colunaComentarioTexto = document.createTextNode(comentario.value);
// criei uma constante para pegar o input do Comentário e adicionar na coluna Comentário
colunaComentario.appendChild(colunaComentarioTexto);
// adicionei o input do comentário na coluna comentário

linha.appendChild(colunaEmpresa);
linha.appendChild(colunaCidade);
linha.appendChild(colunaComentario);
// adicionei os valores do inputs das colunas nas linhas

tabela.appendChild(linha);
// adicionei as linhas na tabela

});