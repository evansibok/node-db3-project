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

function findSteps(scheme_id) {

  return db.select('steps.id',
    'step_number',
    'instructions',
    'schemes.scheme_name')
    .from('steps')
    .innerJoin('schemes', 'steps.scheme_id', 'schemes.id')
    .where({ scheme_id })
    .then(steps => steps)
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  findSteps
}