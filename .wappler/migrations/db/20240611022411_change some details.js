
exports.up = function(knex) {
  return knex.schema
    .table('detailsOrder', async function (table) {
      table.integer('ord_id').alter().unsigned();
      table.foreign('ord_id').references('ord_id').inTable('order').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('pro_id').alter().unsigned();
      table.foreign('pro_id').references('pro_id').inTable('product').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsOrder', async function (table) {
      await table.dropForeign('pro_id');
      await table.dropForeign('ord_id');
      table.integer('ord_id').alter();
      table.integer('pro_id').alter();
    })
};
