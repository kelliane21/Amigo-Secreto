# 🎁 Amigo Secreto

O **Amigo Secreto** é um projeto que facilita a organização e o sorteio de amigos secretos de forma simples e interativa. Ideal para festas, confraternizações e eventos onde um grupo de pessoas deseja realizar a brincadeira de forma organizada e sem erros. 🎉

## 🚀 Funcionalidades
- 📌 **Adicionar participantes**: Cadastre os nomes dos participantes.
- 🎲 **Sorteio automático**: O sistema sorteia os pares de forma justa.
- 📝 **Exibição personalizada**: Cada participante recebe seu amigo secreto de forma privada.
- 📤 **Compartilhamento**: Envie os resultados por e-mail ou outro meio seguro.
- 📱 **Interface intuitiva**: Fácil de usar em qualquer dispositivo.

## 📷 Capturas de Tela


## 🛠️ Tecnologias Utilizadas
- **Linguagem**: Python / JavaScript
- **Frameworks**: Flask / React (caso esteja usando alguma tecnologia específica)
- **Banco de Dados**: SQLite / Firebase (caso necessário)
- **Versionamento**: Git & GitHub

## 🔧 Como Executar o Projeto
1. **Clone o repositório**:
   ```sh
   git clone https://github.com/seu-usuario/amigo-secreto.git
   ```
2. **Acesse a pasta do projeto**:
   ```sh
   cd amigo-secreto
   ```
3. **Instale as dependências**:
   ```sh
   pip install -r requirements.txt  # Para Python
   npm install  # Para JavaScript/React
   ```
4. **Execute o projeto**:
   ```sh
   python app.py  # Caso seja em Python
   npm start  # Caso seja em React
   ```
5. **Acesse no navegador**:
   ```
   http://localhost:3000
   ```

## 🐛 Possíveis Problemas e Soluções
- **Erro ao instalar dependências**: Verifique se seu Python/Node está atualizado.
- **Problemas com sorteio**: Certifique-se de que há pelo menos 3 participantes.
- **Erro de conexão**: Verifique se seu banco de dados está configurado corretamente.

## 🤝 Contribuições
Quer melhorar o projeto? Sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**! Toda ajuda é bem-vinda. 🚀

## 📩 Contato
Caso tenha dúvidas ou sugestões, entre em contato:
- **Email**: [ksguerreiro.doc@gmail.com]


## 📝 Código de Sorteio (JavaScript)
```js
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

// Função para exibir a lista de amigos
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

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
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultadoLista = document.getElementById("resultado");
    
    // Exibir o nome sorteado
    resultadoLista.innerHTML = `<li>🎉 O amigo secreto é: <strong>${sorteado}</strong>!</li>`;
}
