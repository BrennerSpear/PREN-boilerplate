const knex = require('../db/knex')
const bookshelf = require('bookshelf')(knex)
const ModelBase = require('bookshelf-modelbase')(bookshelf)

/*
//Just an example of how it works

module.exports = ModelBase.extend({
  tableName: 'users',
  
  item: function() {
    const Item = require('./item')
    return this.hasMany(Item)
  }
  
}, {

  getWithAllRelated: function(id) {
    return this.where({id: id}).fetch({withRelated: ['item']})
  }

})

*/