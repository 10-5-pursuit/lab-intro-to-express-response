const request = require('supertest')
const app= require('../app')

 it('Testing to see if supertest works', ()=> {
   expect(1).toBe(1)
 })



 describe("Test the root path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.text).toBe("Hello, world!");

        })
    })
  })

  describe("Test the terminator path", () => {
    test("It should respond to the GET method", () => {
      return request(app)
        .get("/terminator1")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.text).toBe("Hasta la vista, baby");
        });
    });
  });