//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo ao array
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Validar a entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adicionar ao array de amigos
    amigos.push(nome);
    atualizarLista();

    // Limpar o campo de entrada
    input.value = "";
}

// Função para exibir a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    
    // Limpar a lista existente
    lista.innerHTML = "";
    
    // Percorrer o array e adicionar cada nome à lista
    amigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos dois amigos para sortear!");
        return;
    }
    
    // Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    // Obter o nome sorteado
    let sorteado = amigos[indiceSorteado];
    let resultadoLista = document.getElementById("resultado");
    
    // Exibir o nome sorteado
    resultadoLista.innerHTML = `<li>🎉 O amigo secreto é: <strong>${sorteado}</strong>!</li>`;
}
