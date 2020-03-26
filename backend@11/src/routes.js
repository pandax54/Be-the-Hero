const express = require('express');
const ong = require('./controllers/ong');
const incidents = require('../src/controllers/incidents');
const profile = require('../src/controllers/profile');
const session = require('../src/controllers/session')

const routes = express.Router();


// como o unico metodo de rota utilizado pelo navegar é o get usaremos o imnsonia para testar os demais métodos
// https://insomnia.rest/
// routes.get('/', (req, res) => {return res.json({evento: "Semana omniStack",aluno: "Fernanda Penna"})})

routes.post('/sessions', session.create);

routes.get('/ongs', ong.index);
routes.post('/ongs', ong.create);


routes.get('/incidents', incidents.index)
routes.post('/incidents', incidents.create )
routes.delete('/incidents/:id', incidents.delete )


routes.get('/profile', profile.index )



module.exports = routes;  