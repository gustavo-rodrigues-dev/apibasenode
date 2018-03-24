# API Boilerplte
[![Build Status](https://travis-ci.org/gustavobeavis/apibasenode.svg?branch=master)](https://travis-ci.org/gustavobeavis/apibasenode)
[![Coverage Status](https://coveralls.io/repos/github/gustavobeavis/apibasenode/badge.svg?branch=master)](https://coveralls.io/github/gustavobeavis/apibasenode?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/gustavobeavis/apibasenode/badge.svg?targetFile=package.json)](https://snyk.io/test/github/gustavobeavis/apibasenode?targetFile=package.json)

Code base destruturado para desenvolvimento de APIS seguindo principios de Design de Classes e de objetos.

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


## Configuração de ambiente

### Instalação

```bash
npm install
```

### Build
Para gerar a versão que será executada pela aplicação

```bash
npm build
```

### Teste
Para execução de testes unitários e funcionais

```bash
npm test
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
