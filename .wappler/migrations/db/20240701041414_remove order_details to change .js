
exports.up = function(knex) {
  return knex.schema
    .dropTable('order_details')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('order_details', async function (table) {
      table.increments('id').primary().notNullable();
      table.integer('ord_id').unsigned();
      table.foreign('ord_id').references('ord_id').inTable('order');
      table.integer('pro_id').unsigned();
      table.foreign('pro_id').references('pro_id').inTable('product');
      table.integer('quantity').notNullable();
    })
};
