const chai = require('chai');
const chaiHttp = require('chai-http');
const { server } = require('../server');

const { expect } = chai;
chai.use(chaiHttp);

describe('Server', () => {
  describe('GET /', () => {
    it('should respond with a hello world', done => {
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
});
