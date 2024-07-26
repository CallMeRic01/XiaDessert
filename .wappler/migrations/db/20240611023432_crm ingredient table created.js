
exports.up = function(knex) {
  return knex.schema
    .createTable('crm', async function (table) {
      table.increments('crm_id');
      table.integer('cus_id').unsigned();
      table.foreign('cus_id').references('cust_id').inTable('customer').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('crm_interDate');
      table.string('crm_interType', 50);
      table.text('crm_note');
    })
    .createTable('ingredient', async function (table) {
      table.increments('ingre_id');
      table.string('ingre_name');
      table.decimal('ingre_price');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('ingredient')
    .dropTable('crm')
};
