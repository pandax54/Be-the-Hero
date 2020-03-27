const express = require('express');
const ong = require('./controllers/ong');
const incidents = require('../src/controllers/incidents');
const profile = require('../src/controllers/profile');
const session = require('../src/controllers/session')

const { celebrate, Segments, Joi } = require('celebrate')

const routes = express.Router();


// como o unico metodo de rota utilizado pelo navegar é o get usaremos o imnsonia para testar os demais métodos
// https://insomnia.rest/
// npm i celebrate --> validation
// routes.get('/', (req, res) => {return res.json({evento: "Semana omniStack",aluno: "Fernanda Penna"})})

routes.post('/sessions', session.create);

routes.get('/ongs', ong.index);
// adding celebrate
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ong.create);

// validation page must be a number
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })    
}), incidents.index)

// validate the ong creating the incidents
routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        auth: Joi.string().required()
    }).unknown()
}), incidents.create )

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidents.delete )


// validate an ORG
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        auth: Joi.string().required()
    }).unknown()
}), profile.index )



module.exports = routes;  