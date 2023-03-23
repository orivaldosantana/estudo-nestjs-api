<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Descrição

API simples criada com o framework [Nest](https://github.com/nestjs/nest).

## Instalação

```bash
$ yarn install
```

### Pacotes

Pacotes que foram instalados manualmente. Não é necessário executar os comandos abaixo pois o `yarn install` instala todos pacotes listados no _package.json_.

Prisma:

```bash
$ yarn add -D prisma
$ yarn add @prisma/client
```

## Executando a aplicação

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Teste

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Banco de dados

O banco de dados para testes é criado a partir de uma imagem docker utilizando o arquivo 'docker-compose.yml'.

### Docker

Criando:

```bash
$ docker compose up dev-db -d
```

Acessando log:

```bash
$ docker logs XXXXXXX
```

Listando os contêineres ativos:

```bash
$ docker ps
```

### Prisma

Comando para ajuda

```bash
$ npx prisma --help
```

Iniciando o prisma pela pimeira vez no projeto

```bash
$ npx prisma init
```

Realizando as migrações definidas em 'schema.prisma'

```bash
$ npx prisma migrate dev
```

Visualizando os dados com prisma _studio_

```bash
$ npx prisma studio
```

## Anotações 
### Módulos 
Uma aplicação de Nest é estruturada em módulos que pode ser composto de outros módulos e de diversos elementos. Os elementos mais comuns são: os controladores e os provedores de serviços. Os módulos faciltam a organização e manutenção do código da aplicação. Para criar um módulo é preciso usar a notação de decoratodor, `@Module`.

Para criar uma código base de um módulo basta: 
```bash
$ nest g module nome
```
Em que *nome* é o nome do módulo e *g* é para 'gerar' o código base para o módulo. 
  
## Rotas

Em modo de desenvolvimento.

## Suporte

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Licença

Nest is [MIT licensed](LICENSE).

## Referências

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

### Como acessar um banco de dados

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

### Autenticação com JWT

- Pacotes: @nestjs/passport passport @nestjs/jwt passport-jwt
- Pacotes em modo dev: @types/passport-jwt
  - Usar a opção '-D' no yarn
- Importar o módulo JWT no módulo de autenticação

### Como criar uma olá mundo em NestJS
