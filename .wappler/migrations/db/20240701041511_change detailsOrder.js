
exports.up = function(knex) {
  return knex.schema
    .table('detailsOrder', async function (table) {
      table.dropColumn('detOrd_quant');
      table.dropColumn('detOrd_size');
      table.dropColumn('detOrd_add');
      table.dropColumn('detOrd_subtotal');
      table.dropColumn('detOrd_price');
      table.integer('detOrd_quantity').notNullable();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsOrder', async function (table) {
      table.integer('detOrd_quant');
      table.string('detOrd_size', 255);
      table.string('detOrd_add', 255);
      table.decimal('detOrd_subtotal');
      table.decimal('detOrd_price');
      table.dropColumn('detOrd_quantity');
    })
};
