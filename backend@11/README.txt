
// creating the frotnend run this command in root folder
$ npx create-react-app frontend 
// then execute with
$ npm start

insomnia: (get postman)
https://insomnia.rest/
brew cask install insomnia


Tipos de parâmetros:

1.query --> parâmtros enviados após o ? exemplo: localhost:3333/users?name="roberto"
Para obter acesso a essa variável para utlizar em um filtro por exemplo:

const params = req.query (ou request.query)

2.Route params: parametros usados para identificar recursos --> /users/:id -> users/1

const params = req.params; (ou request.params)


3.request body: corpo da requisição utilizado para criar ou alterar recursos 
// modo post  
const body = req.body (ou request.body)



// para nao precisar reiniciar o servidor a cada nova modificação
// -D salvando o nodemon como uma dependencia de desenvolvimento
$ npm install -D nodemon


Query Builder - SQL
Knex
$ npm i knex 

npm knex --> comandos

// para executar o pacote
$ npx knex init  --> Created ./knexfile.js

migrations -> https://youtu.be/GfnWvNSWMZE?t=2393

knex migration:make [nome da migration]
```
$ npx knex migrate:make create_ongs 

// run
$ npx knex migrate:latest

$ npx knex migrate:make create_incidents
```

// determinar quem podera acessar nossa aplicacao 
npm install cors


