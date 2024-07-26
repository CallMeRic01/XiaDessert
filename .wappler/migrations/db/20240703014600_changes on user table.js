
exports.up = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.datetime('user_validated').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user', async function (table) {
      table.string('user_validated', 255).alter();
    })
};
