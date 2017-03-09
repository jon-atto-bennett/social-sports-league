
exports.up = function (knex, Promise) {
  return knex.schema.createTable('teams', function (table) {
    table.increments('team_id').primary()
    table.string('name')
    table.string('email')
    table.string('website')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('teams')
}
