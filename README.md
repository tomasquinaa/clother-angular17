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
