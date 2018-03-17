# API Customers

Destina-se para armazenar e fornecer dos participantes nos eventos Natura.

## Estrutura

- database
    - migrations
    - seeders
- log
- public
- src
    - config
    - domain
        - models
        - repositories
    -  http
        - middlewares
        - controllers
        - routes
- test
    - functional
    - unit

### config

### controllers
Pasta onde estão implementada todas as regras de negócio da aplicação, que servem de intermédio entre a camada de dados e a camada de apresentação routes.

### middlewares
Nessa pasta estão todos os middlewares do projeto, ou seja todos os intermediários entre a requisição e a resposta de uma requisição, nelas estão definidas dês de configurações de retorno do json, até filtros ou checagem de autenticação.

### models
Nessa camada estão contidas todos as models do sistema, unitariamente. 

### repositories
Nessa camada estarão armazenada todas as consultas e regras relacionadas a busca e inserção de dados, ela fará o intermédio entre o controller e a camada de dados, de modo quem implementa a regra de persitência ou mesmo de consulta de dados seja feita no repositório e não na model ou controller.

### routes
Sessão onde serão implementadas todas as rotas do sistema, rotas tais que deverão ser previamente abstraídas nos seus controllers correspondentes.

## Configuração de ambiente

### Instalação

```bash
npm install
```

### Execução

```bash
npm start
```
