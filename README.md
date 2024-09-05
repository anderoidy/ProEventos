![Tela do Sistemas](https://vscode.dev/github/anderoidy/ProEventos/blob/master/images/proEventos.png)


# ProEventos

![ProEventos](https://img.shields.io/badge/version-1.0.0-blue.svg)
![.NET](https://img.shields.io/badge/.NET-5.0-blue)
![Angular](https://img.shields.io/badge/Angular-11-red)

ProEventos é uma aplicação web para gerenciamento de eventos, permitindo o cadastro de palestrantes, participantes e a organização de detalhes do evento.

## Sumário

- [Instalação](#instalação)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

### Pré-requisitos

- [.NET 5.0 SDK](https://dotnet.microsoft.com/download/dotnet/5.0)
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Angular CLI](https://angular.io/cli) (versão 11 ou superior)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### Passos para Instalar

1. Clone o repositório:
   ```bash
   git clone https://github.com/anderoidy/ProEventos.git
   cd ProEventos
   ```

2. Instale as dependências do projeto backend:
   ```bash
   cd backend/ProEventos.API
   dotnet restore
   ```

3. Configure a string de conexão com o banco de dados no arquivo `appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=YOUR_SERVER;Database=ProEventos;User Id=YOUR_USER;Password=YOUR_PASSWORD;"
   }
   ```

4. Execute as migrações do banco de dados:
   ```bash
   dotnet ef database update
   ```

5. Inicie a aplicação backend:
   ```bash
   dotnet run
   ```

6. Instale as dependências do projeto frontend:
   ```bash
   cd ../../frontend/proeventos-app
   npm install
   ```

7. Inicie a aplicação frontend:
   ```bash
   ng serve
   ```

8. Acesse a aplicação em `http://localhost:4200`.

## Funcionalidades

- **Gerenciamento de Eventos:** Crie, edite e exclua eventos.
- **Cadastro de Palestrantes:** Adicione e associe palestrantes aos eventos.
- **Inscrição de Participantes:** Permita que usuários se inscrevam nos eventos.
- **Gerenciamento de Lotes:** Controle os lotes de ingressos disponíveis para cada evento.

## Tecnologias Utilizadas

- **Backend:**
  - .NET 5.0
  - Entity Framework Core
  - SQL Server

- **Frontend:**
  - Angular 11
  - TypeScript
  - Bootstrap

## Contribuição

Contribuições são bem-vindas! Para contribuir com o ProEventos, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch com sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m 'Adicionei minha feature'
   ```
4. Envie para o repositório:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Você pode ajustar e complementar as informações conforme necessário para refletir melhor as especificidades do seu projeto.
