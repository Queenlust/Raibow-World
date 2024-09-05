// Cria a função para a execução do botão
function pesquisar(){
// Faz a coleta dos dados dos campos resultados-pesquisa dentro da section no html
let section = document.getElementById ("resultados-pesquisa")
let resultados = ""
// faz a listagem para cada dado dentroda lista
for (let dado of dados) {
    resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Para mais informações</a>
        </div> `;
}
// Retorno da busca
section.innerHTML = resultados
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Documentação do codigo e lembretes para estudo
// Comando declarado no for justifica a variavel sendo dado ao qual receber os dados do arquivo da base de dados
// += faz agregação dos dados, para que a variavel não apenas armazene um valor unico quando usado o =
// let realiza a criação das variaveis
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////