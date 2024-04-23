# ProEventosApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

## Lista de Comandos para organizar o projeto, estrutura de pastas e o arquivo .sln

Comandos para organizar o projeto 

`dotnet new sln -n ProEventos`   -> cria o arquivo ProEventos.sln

`dotnet new classlib -n ProEventos.Persistence`  -> cria a pasta ProEventos.Persistence


`dotnet new classlib -n ProEventos.Domain`  -> cria a pasta ProEventos.Domain


`dotnet new classlib -n ProEventos.Application`  -> cria a pasta ProEventos.Application

## Referenciando o Projeto

## Comandos para adicionar os arquivos dentro dos novos diretorios 

PS C:\Users\Thinkpad\Documents\ProEventos\Back\src> dotnet sln ProEventos.sln add ProEventos.Application
O projeto 'ProEventos.Application\ProEventos.Application.csproj' foi adicionado à solução.

PS C:\Users\Thinkpad\Documents\ProEventos\Back\src> dotnet sln ProEventos.sln add ProEventos.Domain
O projeto 'ProEventos.Domain\ProEventos.Domain.csproj' foi adicionado à solução.

PS C:\Users\Thinkpad\Documents\ProEventos\Back\src> dotnet sln ProEventos.sln add ProEventos.Persistence
O projeto 'ProEventos.Persistence\ProEventos.Persistence.csproj' foi adicionado à solução.
PS C:\Users\Thinkpad\Documents\ProEventos\Back\src> 

## Comandos para referencir 

