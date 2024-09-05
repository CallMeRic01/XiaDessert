
exports.up = function(knex) {
  return knex.schema
    .dropTable('users')
    .dropTable('product')
    .dropTable('customer')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('customer', async function (table) {
      table.increments('cust_id').primary().notNullable();
      table.string('cust_name', 255);
      table.string('cust_num', 255);
      table.string('cust_email', 255);
      table.date('cust_dob');
      table.integer('cust_loyalP');
    })
    .createTable('product', async function (table) {
      table.increments('pro_id').primary().notNullable();
      table.string('pro_name', 255);
      table.decimal('pro_price');
      table.string('pro_image', 255);
      table.text('pro_desc', 65535);
      table.boolean('pro_stat');
    })
    .createTable('users', async function (table) {
      table.increments('id').primary().notNullable();
      table.string('first_name', 50);
      table.string('last_name', 50);
      table.string('gender', 50);
      table.string('email', 50);
      table.string('company', 50);
      table.string('avatar', 100);
    })
};
