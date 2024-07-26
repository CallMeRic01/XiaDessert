
exports.up = function(knex) {
  return knex.schema
    .table('detailsOrder', async function (table) {
      table.decimal('detOrd_subtotal');
      table.decimal('detOrd_price');
    })
    .table('order', async function (table) {
      table.datetime('ord_date').defaultTo(knex.fn.now()).alter();
      table.enum('ord_payMethod', ["Cash","TnG","Grab"]).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('order', async function (table) {
      table.datetime('ord_date').defaultTo().alter();
      table.string('ord_payMethod').alter();
    })
    .table('detailsOrder', async function (table) {
      table.dropColumn('detOrd_subtotal');
      table.dropColumn('detOrd_price');
    })
};
