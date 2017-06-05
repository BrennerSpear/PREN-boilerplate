process.env.NODE_ENV = 'test'
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../server')
const knex = require('knex')

chai.use(chaiHttp)

before(function(done) {
  //clear & seed DB
  done()
})

describe('Server', function() {
  it('should work', function(done) {

    done()
  })
})
