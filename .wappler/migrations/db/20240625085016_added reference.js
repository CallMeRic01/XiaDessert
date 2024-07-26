
exports.up = function(knex) {
  return knex.schema
    .table('order', async function (table) {
      table.integer('pro_id').unsigned();
      table.foreign('pro_id').references('pro_id').inTable('product').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('order', async function (table) {
      table.dropForeign('pro_id');
      table.dropColumn('pro_id');
    })
};
