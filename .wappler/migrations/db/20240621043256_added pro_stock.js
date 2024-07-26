
exports.up = function(knex) {
  return knex.schema
    .table('product', async function (table) {
      table.integer('pro_stock');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('product', async function (table) {
      table.dropColumn('pro_stock');
    })
};
