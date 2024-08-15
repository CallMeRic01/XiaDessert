
exports.up = function(knex) {
  return knex.schema
    .table('detailsOrder', async function (table) {
      table.integer('cust_id').unsigned();
      table.foreign('cust_id').references('cust_id').inTable('customer').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsOrder', async function (table) {
      table.dropForeign('cust_id');
      table.dropColumn('cust_id');
    })
};
