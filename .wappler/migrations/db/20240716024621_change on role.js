
exports.up = function(knex) {
  return knex.schema
    .table('role', async function (table) {
      await table.dropForeign('user_id');
      table.string('user_id').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('role', async function (table) {
      table.integer('user_id').alter().unsigned();
    })
};
