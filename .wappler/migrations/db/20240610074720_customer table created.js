
exports.up = function(knex) {
  return knex.schema
    .createTable('customer', async function (table) {
      table.increments('cust_id');
      table.string('cust_name');
      table.string('cust_num');
      table.string('cust_email');
      table.date('cust_dob');
      table.integer('cust_loyalP');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('customer')
};
