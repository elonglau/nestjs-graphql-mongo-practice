<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# NestJS GraphQL TypeORM MongoDB boilerplate.

## Description

Nest framework codebase best practice with GraphQL + TypeORM + MongoDB.
Containing real world examples(CURD, auth, project & member management etc.)

## Functions
1. Authenticate
   - Config jwt + passport
   - Access token validate
2. Guards
   - Graphql Guard
   - Local Guard
   - Roles Guard
3. TypeORM
   - Modal Entity
   - Validation
4. Datebase config
   - MongoDB
   - MySQL
   - PostgreSQL
5. GraphQL
   - Config integrate
   - Query 
   - Mutation
   - Subscription
6. REST API
   - POST
   - GET
   - PUT
7. Logger
   - NestJS Logger
   - Winston
8. Task scheduler
   - Corn
9. Test
   - E2e

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Todo...
   [-] User role