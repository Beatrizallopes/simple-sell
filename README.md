# Simple Sell: Sistema de cadastro de produtos

<!-- ![Texto alternativo da imagem](src/assets/images/logo.svg) -->
<p align="center">
  <img src="src/assets/images/logo.svg" alt="Logo do projeto">
</p>

Sistema de cadastro de produtos desenvolvido em ReactJS com api mockada utilizando Json Server.
O sistema possui as seguintes funcionalidades:

- **Tela de Login:** tela para autenticação do usuário;
- **Tela de Cadastro de Usuário:** tela para cadastro de usuários;
- **Tela principal:** tela que possui a lista de produtos cadastrados, onde o usuário poderá adicionar um novo produto, editar um produto existente e pesquisar um produto desejado.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.


### 📋 Pré-requisitos

Para rodar o projeto na sua máquina, é necessário instalar o Node.Js, disponível no site oficial [site oficial](https://nodejs.org/en/download/).  É recomendável instalar a versão LTS (suporte de longo prazo). Siga o passo-a-passo de acordo com seu sistema operacional.

### 🔧 Rodando a API

- Instale o JSON Server na sua máquina
    ```
    npm install -g json-server
    ```
- Faça o download do arquivo [db.json](/db.json) no seu computador e salve no local de sua preferência;

- Acesse a pasta onde o arquivo está salvo localmente e abra o prompt de comando;
- Inicie o servidor utilizando o seguinte comando:
    ```
    json-server --watch db.json
    ```
- Pronto! A API já deve estar rodando no endereço http://localhost:3000

### 🔧 Instalação do Frontend

- Faça o download do repositório no seu computador e salve no local de sua preferência;
- Acesse a pasta onde o repositório está salvo localmente e abra o prompt de comando;
- Baixe todas as dependências necessárias:
    ```
    yarn
    ```
- Depois de finalizar a instalação, basta utilizar o seguinte comando para executar a aplicação:
    ```
    yarn dev
    ```
- Acesse a url gerada (que aparece no terminal);


<!-- ## ⚙️ Executando os testes

Explicar como executar os testes automatizados para este sistema.

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
``` -->


## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [ReactJs](https://react.dev/reference/react) - O framework web usado
* [Material UI](https://mui.com/material-ui/getting-started//) - Biblioteca de componentes
* [JSON Server](https://github.com/typicode/json-server) - Biblioteca para criação de api mockada


---
⌨️ com ❤️ por [Beatriz Lopes ](https://github.com/Beatrizallopes) 😊
