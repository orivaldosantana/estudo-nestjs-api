<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## References

- [NestJs Course for Beginners - Create a REST API](https://www.youtube.com/watch?v=GHTA143_b-s)

## Questões importantes

### Como validar entrada de dados

- Pacotes 'class-validator' e 'class-transformer'
- Adicionar a validação através de 'decorators' no código da classe
- Instaciar um validador global de classe
- Objeto do Tipo: TDO
- É possível retirar automaticamente campos não presentes no DTO
  Tempo: 55:13

### Como lidar com as requisições

### Como estruturar as regras de negócio

### Como acessar um banca de dados

- Pacote: prisma
- Configurar a URL de conexão
- Visualização dos dodos com prisma studio
- Importar globalmente o Módulo Prisma para estar acessível para manipulação dos dados em outros módulos

### Como criar rotas para _sign in_ e _sign up_

- Pacote: argon2
- Lógica 'sign up'
  - Gera um hash para a senha
  - Salva o novo usuário no banco de dados
  - Retorna o usuário cadastrado
- Lógica para 'sign in'
  - Encontre o usuário por email
  - Se não existir lance uma exceção
  - Compare a senha
  - Se senha incorreta lance uma exceção
  - Retorne os dados do usuário

Tempo: 1:00:00

### Como criar uma olá mundo em NestJS
