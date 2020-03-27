const request = require('supertest')
const app = require('../../src/app');
const connection = require('../../src/database/connection')


describe('ong', () => {

    beforeEach( async () => {
        // zerar banco de dados antes de fazer o teste
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async ()=> {
        await connection.destroy();
    })
    it('Should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "Macaco Louco",
            email: "macaco@louco.com",
            whatsapp: "27998753750",
            city: "Rio Grande",
            uf: "RS"
        })

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

        console.log(response.body)
    }) 
})