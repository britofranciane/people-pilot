# People Pilot
## Deploy

A aplicação está disponível online e pode ser acessada através do seguinte link:
🔗 [People Pilot - Acesse o Projeto](https://people-pilot-ud9s.vercel.app/)

Este projeto é um sistema de gerenciamento de usuários que permite criar, editar e visualizar informações de usuários. Foi desenvolvido utilizando **React**, **React Query**, **React Router**, **Context API**, **Material UI** e **TypeScript** para criar uma aplicação moderna e eficiente.
## Página Home 
1. Sem dados
![image](https://github.com/user-attachments/assets/f3801d53-859e-4baa-907a-4bed891868fb)

2. Com dados
![image](https://github.com/user-attachments/assets/7eaad1c4-0da5-4373-a466-8fdd7b07afa9)


## Página User
1. Cadastro de Usuário
   ![image](https://github.com/user-attachments/assets/385d5958-2153-4e2a-b8bc-e88f77713f42)

2. Editar Usuário
   ![image](https://github.com/user-attachments/assets/8cefc8bb-6297-4f9b-b80a-45d2fa21256c)

---

## **Índice**

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pr%C3%A9-requisitos)
- [Instalação](#instala%C3%A7%C3%A3o)
- [Rodando o Projeto](#rodando-o-projeto)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Context API](#context-api)
- [Rotas](#rotas)

---

## **Tecnologias Utilizadas**

- **React** - Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript** - Superset do JavaScript que adiciona tipos estáticos.
- **React Router** - Para o gerenciamento de rotas na aplicação.
- **React Query** - Para o gerenciamento de estado assíncrono e cache de dados de servidor.
- **Context API** - Para gerenciamento de estado global.
- **Material UI** - Biblioteca de componentes estilizados e responsivos.
- **Axios** - Biblioteca para realizar requisições HTTP.
- **Vite** - Ferramenta para build e desenvolvimento rápido de aplicações front-end.

---

## **Funcionalidades**

- **Criação de Usuário** - Permite criar um novo usuário preenchendo o formulário de informações.
- **Edição de Usuário** - Permite editar as informações de um usuário existente.
- **Visualização de Usuário** - Visualiza informações detalhadas do usuário.
- **Notificações Toast** - Exibe mensagens de sucesso ou erro ao criar/editar usuários.

---

## **Pré-requisitos**

Antes de começar, certifique-se de ter instalado em sua máquina as seguintes ferramentas:

- Node.js
- [Git](https://git-scm.com/)

Além disso, é recomendável o uso de um editor de código como o [VSCode](https://code.visualstudio.com/).

---

## **Instalação**

### 1. **Clonar o repositório**

`git clone https://github.com/seu-usuario/seu-repositorio.git`

### 2. **Acessar o diretório do projeto**

`cd nome-do-projeto`

### 3. **Instalar as dependências**

Execute o comando abaixo para instalar todas as dependências do projeto:

`npm install`

---

## **Rodando o Projeto**

### 1. **Ambiente de Desenvolvimento**

Para rodar o projeto em ambiente de desenvolvimento, execute:



`npm run dev`

O projeto será aberto automaticamente no navegador, ou você pode acessá-lo manualmente em [http://localhost:3000](http://localhost:3000).

### 2. **Build para Produção**

Para criar a build do projeto para produção, execute:

`npm run build`

Isso criará uma versão otimizada do projeto na pasta `dist`.

---

## **Estrutura de Pastas**

`src/
│
├── components/
│   ├── Box/
│   ├── Head/
│   └── UserForm/
│
├── hooks/
│   └── useToast.ts
│
├── services/
│   ├── api.ts
│   └── userService.ts
│
├── contexts/
│   └── UserContext.tsx
│
├── App.tsx
├── main.tsx
└── index.css`

- **components/** - Contém todos os componentes reutilizáveis da aplicação, como `UserForm` e `Head`.
- **hooks/** - Contém hooks customizados, como o `useToast`.
- **services/** - Contém serviços de comunicação com a API, como o `userService.ts`.
- **contexts/** - Contém a implementação da Context API, usada para compartilhar dados entre componentes.

---

## **Context API**

Estamos utilizando o `UserContext` para gerenciar o estado global dos usuários na aplicação.

### Exemplo de Uso:

`import { useContext } from 'react';
import { UserContext } from '@contexts/UserContext';

const UserComponent = () => {
const { users, setUsers } = useContext(UserContext);

};`

---

## **Rotas**

Utilizamos o **React Router** para gerenciar as rotas da aplicação.

### Configuração de rotas:

`import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './pages/User';
import Home from './pages/Home';

<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user/:id" element={<User />} />
    <Route path="/create-user" element={<User />} />
  </Routes>
</Router>;`
