
exports.up = function(knex) {
  return knex.schema
    .createTable('branch', async function (table) {
      table.increments('br_id');
      table.string('br_name', 255);
      table.string('br_loc', 255);
      table.string('br_num', 255);
    })
    .createTable('promotion', async function (table) {
      table.increments('promo_id');
      table.string('promo_code', 50);
      table.text('promo_desc');
      table.decimal('promo_dis');
      table.date('promo_startDate');
      table.date('promo_endDate');
    })
    .createTable('payment', async function (table) {
      table.increments('pay_id');
      table.integer('ord_id').unsigned();
      table.foreign('ord_id').references('ord_id').inTable('order').onUpdate('CASCADE').onDelete('CASCADE');
      table.decimal('pay_paid');
      table.decimal('pay_change');
      table.string('pay_method', 50);
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('payment')
    .dropTable('promotion')
    .dropTable('branch')
};
