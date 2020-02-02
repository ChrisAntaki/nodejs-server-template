const chai = require('chai');
const chaiHttp = require('chai-http');
const { server } = require('../server');

const { expect } = chai;
chai.use(chaiHttp);

describe('Server', () => {
  describe('GET /', () => {
    it('responds with message', done => {
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.equal('Hello World');
          done();
        });
    });
  });

  describe('GET /add', () => {
    it('responds with sum of two numbers', done => {
      chai
        .request(server)
        .get('/add?a=2&b=2')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.equal('4');
          done();
        });
    });
  });
});
