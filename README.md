# Desafio Técnico Easyjur

Este projeto foi desenvolvido para atender ao desafio técnico proposto pela Easyjur. Por favor siga atentamente as instruções a baixo para conseguir executar os testes.

## Tecnologias Utilizadas
- Node.js
- Cypress
- Allure Report

## Dependências
- Node.js - versão Latest
- VSCode 
- GIT

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/juliosantosjob/Technical-Challenge-Easyjur.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd Technical-Challenge-Easyjur
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto para armazenar informações sensíveis, como URLs de ambientes e credenciais. Exemplo:

    ```kotlin
    DEV=https://www.dev.automationexercise.com
    STAGING=https://www.automationexercise.com
    PROD=https://www.prod.automationexercise.com

    SECRET_EMAIL=QA4321@gmail.com
    SECRET_PASSWORD=Mudar@123
    ```

## Execução de Testes

O projeto está configurado para executar os testes nos ambientes de Dev, STG e PRD. A ideia é demonstrar como os testes podem ser executados em diferentes ambientes, alterando apenas o comando de execução apropriado.

a url da aplicação esta na varivel STG. Par executar o projeto basta rodar o comando abaixo:

    ```bash
    npm run test:stg
    ```

Assim os testes serão executados corretamente.

## Reporte de Teste

Utilizei o Allure Report para gerar um relatório dos testes executados. Para gerar o relatório basta rodar o comando abaixo:

    ```bash
    npm run allure:test:stg
    ```

Desta maneira os testes serão executados e o relatório aberto apos a execução.