const db = require('../data/db-config');

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function add(scheme) {
  return db('schemes')
    .insert(scheme)
}

function update(id, changes) {
  return db('schemes')
    .where({ id })
    .update(changes)
}

function remove(id) {
  return db('schemes')
    .where({ id })
    .del()
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}