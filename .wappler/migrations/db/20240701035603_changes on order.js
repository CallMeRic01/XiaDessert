
exports.up = function(knex) {
  return knex.schema
    .table('order', async function (table) {
      table.integer('ord_quantity');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('order', async function (table) {
      table.dropColumn('ord_quantity');
    })
};
