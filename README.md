# 🌎 API RESTful - Vivências do Mundo

[![Node.js Version](https://img.shields.io/badge/node-22.14.0-brightgreen)](https://nodejs.org/) [![NPM Version](https://img.shields.io/badge/npm-v11.3.0-blue)](https://www.npmjs.com/)

## 📘 Descrição

A **API RESTful** para o aplicativo **Vivências do Mundo** foi projetada para fornecer uma interface eficiente para interagir com dados sobre **eventos**, **serviços** e **estabelecimentos** feitas pela comunidade de migrantes em Salvador, BA. A plataforma busca facilitar o acesso à informação e promover a integração social dessa comunidade. A API segue os princípios RESTful, permitindo operações sobre os recursos disponíveis.

## 💻 Tecnologias

### Core

![NodeJS](https://img.shields.io/badge/node.js-22.14.0-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/express.js-5.1.0-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-ES2024-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Banco de Dados

![Postgres](https://img.shields.io/badge/postgres-16.8-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-6.37.7-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

### Segurança & Validação

![JWT](https://img.shields.io/badge/JWT-9.0.2-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Zod](https://img.shields.io/badge/zod-3.24.2-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)

### Ferramentas

![Swagger](https://img.shields.io/badge/Swagger-5.0.1-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

## 📋 Pré-requisitos

- **Node.js** (v18 ou superior)
- **npm** (v9 ou superior) ou **yarn** (v1.22+)
- Banco de dados **PostgreSQL** (v16.8 ou superior)
- **Docker** (v20.10+ - opcional, para execução em container)

## 🚀 Como Executar

### Configuração Inicial

1. Clone o repositório:

```bash
git clone https://github.com/Projeto-Migrantes/cultural-agenda-api.git
cd cultural-agenda-api
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

```env
# Banco de Dados
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=postgres

DB_NAME=cultural_agenda_db
DB_PORT=5432
DB_DIALECT=postgres

# Servidor
SV_PORT=3000

# JWT
JWT_SECRET=dev_secret_key_123

# CORS
CORS_ORIGIN=http://localhost:3000

# Node
NODE_ENV=development

# Cloudinary
CLOUDINARY_CLOUD_NAME=dh3hmh3vd
CLOUDINARY_API_KEY=642136486589865
CLOUDINARY_API_SECRET=Tawwa0TTyeBr1g7izFR3KpMrJ-s
```

> Exemplo de `.env.example` disponível no projeto. Configure de acordo com o seu ambiente.

### Instalação de Dependências

```bash
npm install
```

### Criar Banco de Dados

Crie um banco de dados no seu PostgreSQL com o nome `cultural_agenda_db`

### Rodando as Migrações

Após garantir que o banco de dados está configurado, você pode rodar as migrações para criar as tabelas no banco de dados. Isso pode ser feito com o seguinte comando:

```bash
npx sequelize-cli db:migrate
```

> **Importante**: Este comando executa as migrações definidas no diretório src/migrations e cria as tabelas no banco de dados especificado no .env.

### Excução dos Seeders (se houver dados inicias)

Após rodar as migrações, você pode rodar os seeders para inserir dados iniciais nas tabelas criadas. Se você tiver seeders prontos, rode o seguinte comando:

```bash
npx sequelize-cli db:seed:all
```

> **Observação**: Os seeders são definidos no diretório src/seeders.

### Execução em Ambiente de Desenvolvimento

```bash
npm run dev
```

### Execução com Docker (opcional)

```bash
docker compose up -d
```

## 🛠️ Scripts Disponíveis

|      Comando       |                                                                    Descrição                                                                    |
| :----------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
|   `npm run dev`    | Executa o servidor em ambiente de desenvolvimento utilizando `nodemon`, que reinicia automaticamente o servidor quando há mudanças nos arquivos |
|  `npm run start`   |             Executa o servidor em ambiente de produção com `node`, sem recarregar automaticamente ao fazer alterações nos arquivos              |
|   `npm run lint`   |                              Executa o ESLint para verificar problemas de estilo e qualidade de código no projeto                               |
| `npm run lint:fix` |                   Executa o ESLint e tenta corrigir automaticamente os problemas de estilo e qualidade de código encontrados                    |

## 📚 Documentação da API

Após rodar o projeto, acesse a rota `/api-docs`

> Documentação gerada com o **Swagger**.

## 🗂️ Estrutura de Pastas

```
src/
│
├── config/          # Configurações (banco de dados, servidor, autenticação, etc.)
├── controllers/     # Lógicas de controle (entrada/saída de dados, manipulação de requisições)
├── docs/            # Documentação da API (Swagger)
├── middlewares/     # Validações e interceptações de requisições (autenticação, autorização, etc.)
├── migrations/      # Arquivos para migrações do banco de dados
├── models/          # Modelos de dados (definição de tabelas com Sequelize)
├── repositories/    # Camada de acesso a dados (consultas, manipulação direta das tabelas)
├── routes/          # Definição de rotas (mapeamento de URLs para os controllers)
├── schemas/         # Validações de dados (Zod) para garantir a integridade das informações recebidas
├── seeders/         # Arquivos para inserir dados iniciais no banco de dados (população inicial de tabelas)
├── services/        # Regras de negócio (lógica complexa que não deve estar nos controllers)
├── tests/           # Testes (unitários, testes de API)
└── utils/           # Funções utilitárias (funções reutilizáveis para tarefas comuns)

```

## 🤝 Contribuição

Para contribuir com o projeto, siga as orientações abaixo:

- **Fluxo de Trabalho**:

  - Utilizar obrigatoriamente o **Gitflow** para criação das branches (ex: `feature/example-feature`).
  - Pull Requests (PRs) devem ser feitos para a branch `develop`.
  - PRs devem conter descrição clara das alterações realizadas.

- **Commits**:

  - Preferencialmente utilizar **Conventional Commits** (padrão opcional, mas recomendado).
  - Exemplos de commit:
    - `feat: adicionar novo endpoint de eventos`
    - `fix: corrigir bug no cadastro de usuários`
    - `docs: atualizar README com seção de contribuição`

- **Padronização**:
  - Seguir o estilo de código definido pelo projeto.
  - Manter a organização das pastas e arquivos.

## 📝 Licença

Este projeto é proprietário e está licenciado conforme [termos de uso](https://github.com/Projeto-Migrantes/cultural-agenda-api/blob/main/LICENSE).
