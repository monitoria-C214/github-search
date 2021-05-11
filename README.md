
<p align="center">  
  <a href="https://github.com/VanessaSwerts/github-search/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VanessaSwerts/github-search">
  </a>    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">  
   <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/VanessaSwerts/github-search/testes-jest">	
</p>

<h4 align="center"> 
	🚧 GitHub Search - Concluído 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-autora">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

GitHub Search é um projeto desenvolvido para as aulas de Teste Unitário e Teste Mock da monitoria de Engenharia de Software (C214).

---

## ⚙️ Funcionalidades
 
- [x] Pesquisar usuários do GitHub

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

Para configurar o ambiente, [clique aqui!](https://www.notion.so/Configurando-o-Ambiente-React-JS-77e7ee6319404b729172e5b0cd78a082)

#### Executando o projeto

##### 🧭 Rodando a aplicação Frontend

   ```bash
    # Clone este repositório
    $ git clone https://github.com/VanessaSwerts/github-search.git

    # Acesse a pasta do projeto no seu terminal/cmd
    $ cd github-search

    # Instale as dependências
    $ yarn install

    # Execute a aplicação
    $ yarn start
    
    #Execute os testes
    $ yarn test

    # O servidor inciará na porta:3000 - acesse http://localhost:3000 .
   ```

---

## 📁 Estrutura de arquivos

Atualizado 08/04/2021

```bash
github-search
├─ .gitignore
├─ LICENSE
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.js
│  ├─ components
│  │  ├─ Button
│  │  │  ├─ Button.css
│  │  │  └─ Button.js
│  │  ├─ Card
│  │  │  ├─ Card.css
│  │  │  └─ Card.js
│  │  ├─ Error
│  │  │  ├─ Error.css
│  │  │  └─ Error.js
│  │  ├─ Footer
│  │  │  ├─ Footer.css
│  │  │  └─ Footer.js
│  │  ├─ Header
│  │  │  ├─ Header.css
│  │  │  └─ Header.js
│  │  ├─ index.js
│  │  └─ Loading
│  │     ├─ Loading.css
│  │     └─ Loading.js
│  ├─ index.js
│  ├─ pages
│  │  ├─ Home
│  │  │  ├─ Home.css
│  │  │  └─ Home.js
│  │  └─ index.js
│  ├─ services
│  │  └─ api.js
│  ├─ setupTests.js
│  └─ __tests__
│     ├─ snapshots
│     │  ├─ components
│     │  │  ├─ Button.test.js
│     │  │  ├─ Card.test.js
│     │  │  ├─ Error.test.js
│     │  │  ├─ Footer.test.js
│     │  │  ├─ Header.test.js
│     │  │  ├─ Loading.test.js
│     │  │  └─ __snapshots__
│     │  │     ├─ Button.test.js.snap
│     │  │     ├─ Card.test.js.snap
│     │  │     ├─ Error.test.js.snap
│     │  │     ├─ Footer.test.js.snap
│     │  │     ├─ Header.test.js.snap
│     │  │     └─ Loading.test.js.snap
│     │  └─ pages
│     │     ├─ Home.test.js
│     │     └─ __snapshots__
│     │        └─ Home.test.js.snap
│     └─ unit
│        └─ pages
│           └─ Home.test.js
└─ yarn.lock

```

## 🦸 Autora

<table>
  <tr>   
    <td align="center"><a href="https://github.com/vanessaSwerts/"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/57146734?v=4" width="100px;" alt=""/><br /><sub><b>Vanessa Swerts</b></sub></a></td>  
  </tr>
</table>

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).
