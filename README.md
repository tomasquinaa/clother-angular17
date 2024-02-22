# Angular17

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

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

## Instalar o Angular Material:

ng add @angular/material

## Criar Componentes

ng g c components/home

## Control flow

@if(*ngIf)
@else
@for(*ngFor)

export class HomeComponent {
types = [1, 2, 3, 4];
}
@for (item of types; track $index) {

<h2>hello {{item}}</h2>
}@empty {
<h4>Não há elemento no array </h4>
}

## Criar um component product:

ng g c components/product-card

## Component Comunication

@Input: provide product detail to product card as input

@output: Emit view product event from product card

## componente Serach

ng g c components/search

## Services

Creating Angular service: create product service; injecting; data sharing
Http Client

ng g s product

## Criação do JSON SERVER

npm install json-server

npm run server - verificar no package.json

Create a db.json or db.json5 file

## Routing

ng g c components/product-detail

## Forms

ng g c componenents/add-product

## NGX TOASTER

INSTALAÇÃO: npm install ngx-toastr --save

LINK: https://www.npmjs.com/package/ngx-toastr

copiamos a importação e colamos no styles.css: @import 'ngx-toastr/toastr';

copiamos o provideToastr e colamos no app.config: provideToastr(), // Toastr providers

## PIPES

Pipes são funções que são usadas para transformar dados em modelos. Eu geral, pipes são funções "puras" que não causam efeitos colaterais. O Angular tem uma série de pipes internos úteis que você pode importar e usar em seus componentes. Você também pode criar um pipe personalizado

Para transformar a palavra maiscula e minuscula - Pipe

comando: ng g pipe rupe

foi criado um ficheiro pipe e foi trabalhado no componente produto principal ou listado
