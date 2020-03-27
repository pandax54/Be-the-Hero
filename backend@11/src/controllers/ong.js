const connection = require('../database/connection')
const crypto = require('crypto')
const generateUniqueid = require('../utils/generateUniqueId')

module.exports = {
    async index(req, res) {
    
        const ongs = await connection('ongs').select('*');
        
        return res.json(ongs)
        
    },
    async create(req, res) {
    
    // const data = req.body; 
    const { name, email, whatsapp, city, uf } = req.body

    const id = generateUniqueid();

    await connection('ongs').insert({
        id, 
        name, 
        email, 
        whatsapp, 
        city, 
        uf
    })

    console.log(name, email, whatsapp, city, uf, id);

    return res.json({ id })
    
    }
}