# API REST Mínima de Fórmula 1 com Node.js e TypeScript

Este projeto é fonte de estudos das tecnologias Node.js, TypeScript e Fastify. Ela utiliza o conceito de API Rest mínima e fornece informações sobre equipes e pilotos de Fórmula 1.

## Funcionalidades

A API oferece os seguintes endpoints:

* **GET /teams:** Retorna uma lista de todas as equipes de F1.
* **GET /teams/:id:** Retorna uma equipe específica pelo seu ID.
* **GET /drivers:** Retorna uma lista de todos os pilotos de F1.
* **GET /drivers/:id:** Retorna um piloto específico pelo seu ID.


## Exemplos de requisições
### Obter todas as equipes:

`http://localhost:3333/teams`

### Obter a equipe com ID 2:

`http://localhost:3333/teams/2`

### Obter todos os pilotos:

`http://localhost:3333/drivers`

### Obter o piloto com ID 1:

`http://localhost:3333/drivers/1`