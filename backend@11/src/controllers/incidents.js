const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {

    async index(req, res) {

        //paginação
        const { page = 1 } = req.query;

        //pegar a primeira posição
        // ou entao tb podemos usar a notação count[0]
        const [count] = await connection('incidents')
        .count();

        console.log(count);

        res.header('X-Total-Count', count['count(*)'])


        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        return res.json(incidents)

    },

    async create(req, res){
        const { title, description, value } = req.body;

        // ong_id para relacionar as tabelas
        // cabeçalho da requisição ->  req.headers
         const ong_id = req.headers.auth

         // desestruturar para retornar o id dessa funcao async
         const [id] = await connection('incidents').insert({
             title,
             description,
             value,
             ong_id
         });

         // outra possibilidade é colocando uma outra var como const results = await ...
         // e depois const id = results[0] // uma vez que o id será o primeiro resultado retornado

         return res.json({ id })
    },
    async delete(req, res){

        const { id } = req.params
        // verificar se usuario tem permissão, se nao for o mesmo retornará 401 == nao autorizado
        const ong_id = req.headers.auth

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        // caso a ong que esteja tentando deletar o caso nao for a criadora do mesmo ela nao terá permissão para tal ação
        if (incident.ong_id != ong_id ) {
            return res.status(401).json({ error: 'Operation not permitted.'})
        }

        await connection('incidents').where('id', id).delete();

        return res.status(204).send();
    }

}