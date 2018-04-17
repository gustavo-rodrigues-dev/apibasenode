# API Boilerplate
[![Build Status](https://travis-ci.org/gustavobeavis/apibasenode.svg?branch=master)](https://travis-ci.org/gustavobeavis/apibasenode)
[![Coverage Status](https://coveralls.io/repos/github/gustavobeavis/apibasenode/badge.svg?branch=master)](https://coveralls.io/github/gustavobeavis/apibasenode?branch=master)
[![Daviid Dependencies](https://david-dm.org/gustavobeavis/apibasenode.svg)](https://david-dm.org/gustavobeavis/apibasenode)
[![Daviid Dependencies](https://david-dm.org/gustavobeavis/apibasenode/dev-status.svg)](https://david-dm.org/gustavobeavis/apibasenode?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/gustavobeavis/apibasenode/badge.svg?targetFile=package.json)](https://snyk.io/test/github/gustavobeavis/apibasenode?targetFile=package.json)

Esse projeto consiste em estandarizar algumas das melhores praticas de design de projeto relacionados a API REST, onde o propósito é reforçar a divisão de responsabilidades de sistema, dividindo-os em sessões responsáveis por cada escopo, de modo que se melhores a manutenciabilidade e também se repita menos código. Em uma visão geral, esse bilerplate tem o intuíto de prover um projeto basico respeitando os principios de qualidade e de divisão de responábilidades da aplicação, além de testes unitários e de integração.

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
    
### database/migrations
Pasta destinada as Database Migrations que nos permitem controlar a versão do banco de dados, evitando a necessidade de escrever scripts SQL diretamente e executá-los em ferramentas de administração. Com as Database Migrations (ou Schema Migrations), alterações incrementais nas bases de dados são feitas de forma gerenciada. 

no caso do Sequelize que é a lib default, a referência de codificação é essa:
http://docs.sequelizejs.com/manual/tutorial/migrations.html#creating-first-model-and-migration- 

### database/seeders
Assim como a migrations, também servem para inserções incrementais no banco, mas ao invés de estrutura, os seeders são destinados a dados pelos quais queremos inserir, como cargas iniciais.

No caso do Sequelize, que é o ORM default do projeto, a referência de como usar é essa:
http://docs.sequelizejs.com/manual/tutorial/migrations.html#creating-first-seed
  
### src/config
Pasta onde estão armazenada todas as configurações do sistema, independente de seu ambiente.

### src/domain/models
Nessa camada estão contidas todos as models do sistema, unitariamente. Caso você use mais de uma modalidade de banco de dados, recomendo que crie pastas para cada tipo 

### src/domain/repositories
Nessa camada estarão armazenada todas as consultas e regras relacionadas a busca e inserção de dados, ela fará o intermédio entre o controller e a camada de dados, de modo quem implementa a regra de persitência ou mesmo de consulta de dados seja feita no repositório e não na model ou controller.

### src/http/controllers
Pasta onde estão implementada todas as regras de negócio da aplicação, que servem de intermédio entre a camada de dados e a camada de apresentação.

### src/http/middlewares
Nessa pasta estão todos os middlewares do projeto, ou seja todos os intermediários entre a requisição e a resposta de uma requisição, nelas estão definidas dês de configurações de retorno do json, até filtros ou checagem de autenticação.

### src/http/routes
Sessão onde serão implementadas todas as rotas do sistema, elas deverão ser previamente abstraídas nos seus controllers correspondentes. A vantagem de separar a router do controller é a opção de reuso de controladores além de permitir a documentação da API sem poluir a camada de controller (sweeger, APIdoc, etc).

### test/functional
Sessão responsável por conter todos os testes de integração, ou seja, os testes das rotas propriamente ditas, por ser um projeto BDD, nessa sessão recomenda-se um arquivo por arquivo de rota, de modo que você implemente o teste de todos ou dos principais comportamentos por rota.

### test/unit
Área responsável por conter todos os testes unitários do projeto, ou seja, todas as classes e funções utilitárias de modo individual. 
*Obs*: Recomendo que nunca teste um dominio, um controlador ou rota nessa sessão, teste apenas arquivos indepodentes e auto contidos, pois toda a parte de domínio e controle já será implicitamente usado no teste funcional.

## Configuração de ambiente

### Instalação
Para Instalar todas as dependências do projeto

```bash
npm install
```

Para rodar todas as migrations
```bash
npm run db:migrate
```


Para rodar todos os seeders
```bash
npm run db:seeder
```

### Build
Para gerar a versão que será executada pela aplicação

```bash
npm run build
```

### Teste
Para execução de testes unitários e funcionais

```bash
npm test
```

Para verificar a cobertura de teste
```bash
npm run cover
```

### lint
Para verificar se o código está dentro do padrão standard js

```bash
npm run lint
```

Para verificar e corrigir automaticamente para o padrão standard js, caso não corrija ele aponta onde deve ajustar

```bash
npm run lint:fix
```

### Execução

#### sincrono
Usoado para startar a aplicação sem observar as mudanças em tempo real.

```bash
npm start
```

#### assincrono
Usado durante o desenvolvimento para enxergar em tempo real as mudanças sem restartar.

```bash
npm run startdev
```

#### modo debug
Caso queira depurar enquanto desenvolve

```bash
npm run debug
```

Caso você use [VSCode](https://code.visualstudio.com/docs/editor/debugging) você pode usar a configuração abaixo e depurar em tempo de execução.

[.vscode/launch.json](https://gist.github.com/gustavobeavis/c608dd0373776d4e4f25bbcb1f2a22de)
```json
{
    "version": "0.2.0",
    "configurations": [
      {
      "type": "node",
      "request": "launch",
      "name": "Launch via NPM",
      "runtimeExecutable": "npm",
      "runtimeArgs": [
        "run",
        "debug"
      ],
      "port": 9229
    }
  ]
}
```

### Documentação

#### Criar

```bash
npm run apidoc
```
#### Visualizar

```bash
npm run apidoc:server
```

## DOCKER

### Build
```bash
docker build -t apibase -f default.Dockerfile .
```

### run
```bash
docker run -p 3000:3000  apibase
```

## Referências
- [Documentação do projeto](https://github.com/gustavobeavis/apibasenode/wiki)
- [Documentação da API](https://gustavobeavis.github.io/apibasenode/)

## License

  [MIT](LICENSE)
