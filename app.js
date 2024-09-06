// Cria a função para a execução do botão realizar a busca
function pesquisar(){

    // Cria as variaveis para o uso do codigo
    let section = document.getElementById ("resultados-pesquisa");
    let campoPesquisa = document.getElementById ("campo-pesquisa").value;
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Faz a listagem para cada dado dentroda lista verificando em minusculo os elementos da base de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.titulo.toLowerCase()
        tags = dado.tags.toLowerCase()

    // Processo de comparação e validação dos valores (if then else)
    // Se o titulo não existir no campoPesquisa OU for inserido menos que 3 caracteres informa a mensagem e não procede com o tratamento
        if (campoPesquisa.trim().length < 2 || !campoPesquisa) {
        section.innerHTML = "Nenhum resultado encontrado. Você precisa digitar um valor válido"
        return
        } 

    // Converte os valores do campo pesquisa para minusculo    
    campoPesquisa = campoPesquisa.toLowerCase()
        
    // Se existir (includes) titulo, descrição ou tag no campoPesquisa faz o tratamento 
       if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {
        resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Para mais informações</a>
            </div> `;
        }
    }

    // Em caso do resultado de busca não existir
    if (!resultados) {
        resultados = "Nada foi encontrado nenhum resultado para: " + campoPesquisa; 
    }

    // Retorno da busca e o print na tela HTML do resultado
    section.innerHTML = resultados
    }
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Documentação do codigo e lembretes para estudo
    // Comando declarado no for justifica a variavel sendo dado ao qual receber os dados do arquivo da base de dados
    // Faz a coleta dos dados dos campos resultados-pesquisa dentro da section no html usando por exemplo o document.getElementById
    // += faz agregação dos dados, para que a variavel não apenas armazene um valor unico quando usado o =
    // let realiza a criação das variaveis
    // camelCase é utilizado para ligação de palavras como por exemplo em campoPesquisa que usa o id no html do input campo-pesquisa
    // dado.titulo.includes(campoPesquisa) ele faz a validação se o campo titulo corresponde na base de dados sendo o mesmo do campo digitado com verdadeiro ou falso
    // quando utilizado == no javascript ele interpreta sendo uma forma de comparação e || faz o OU de condição
    // if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase())) Faz a consulta em minusculo
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
