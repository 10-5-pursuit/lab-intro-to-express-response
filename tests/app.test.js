const supertest = require('supertest')

const app = require('../app.js')

describe('Testing the root path', () => {
    test('It should response the GET method',()=>{
        return request(app)
            .get("/")
            .then(res => {
                expect(res.statusCode).toBe(418);
            })
    })
})