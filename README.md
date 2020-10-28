# RemSpa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

# Правила работы с Git

Основные ветки присутствующие на проекте:
* dev - ветка для разработчиков, от которой начинаются новые фичи, правка багов и пр.
* stage - для деплоя на тестовые сервера, сюда попадают законченные фичи, слитые в **dev**
* master - для деплоя на прод, сюда сливается только оттестированный код из ветки **stage**

Общие правила именования веток:
* issue/номер-задачи-в-тфс (напрмер: _issue/35451_) - ветка, в которой делается конкретная задача, для конкретной фичи.
* fix/номер-бага-в-тфс (например: _fix/56743_) - ветка, в который исправляется, обнаруженный баг, ветвится от ветки **dev**.

Напрямую в __dev/stage/master__ **не коммитим!** Все через Pull-реквесты.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
