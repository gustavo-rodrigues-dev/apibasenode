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

```bash
npm build
```

### Teste

```bash
npm test
```

### Execução

```bash
npm start
```
