
exports.up = function(knex) {
  return knex.schema
    .table('order', async function (table) {
      table.decimal('ord_paidCash');
      table.decimal('ord_changeAmount');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('order', async function (table) {
      table.dropColumn('ord_paidCash');
      table.dropColumn('ord_changeAmount');
    })
};
