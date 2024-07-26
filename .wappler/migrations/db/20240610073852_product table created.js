
exports.up = function(knex) {
  return knex.schema
    .createTable('product', async function (table) {
      table.increments('pro_id');
      table.string('pro_name');
      table.decimal('pro_price');
      table.string('pro_image');
      table.text('pro_desc');
      table.boolean('pro_stat');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('product')
};
