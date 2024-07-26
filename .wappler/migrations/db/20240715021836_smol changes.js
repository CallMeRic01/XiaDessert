
exports.up = function(knex) {
  return knex.schema
    .table('role', async function (table) {
      table.dropColumn('user_name');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('role', async function (table) {
      table.integer('user_name');
    })
};
