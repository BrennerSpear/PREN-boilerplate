const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[environment];
const knex = require('knex')(config)

console.log('Connecting to ' + config.connection)

module.exports = knex