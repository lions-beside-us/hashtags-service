const mongoose = require('mongoose');
const db = require('../database/index');

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../server/index');

let should = chai.should();
chai.use(chaiHttp);

describe('/GET hashtags', () => {
  it('it should GET all the hashtags', (done) => {
    chai.request(app)
        .get('/hashtags')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a('array');
              res.body.data.length.should.equal(100); //gt is greater than
          done();
        });
  });
});

describe('/GET hashtag', () => {
  it('it should GET one set of hashtags for song_id 1', (done) => {
    chai.request(app)
        .get('/hashtags/1')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.data.should.be.a('array');
              res.body.data.length.should.be.gte(1); //gt is greater than
              res.body.data.length.should.be.below(7);
          done();
        });
  });

  it('it should not GET one set of hashtags for song_id that doesnt exist 101', (done) => {
    chai.request(app)
        .get('/hashtags/101')
        .end((err, res) => {
          res.should.have.status(400);
          res.body.msg.should.be.a('string');
          res.body.msg.should.equal('no song with id 101');
          done();
        });
  });
});