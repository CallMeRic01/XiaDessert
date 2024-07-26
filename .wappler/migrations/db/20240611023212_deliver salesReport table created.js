
exports.up = function(knex) {
  return knex.schema
    .createTable('delivery', async function (table) {
      table.increments('del_id');
      table.string('del_regName', 255);
      table.decimal('del_fee');
    })
    .createTable('salesReport', async function (table) {
      table.increments('rep_id');
      table.integer('br_id').unsigned();
      table.foreign('br_id').references('br_id').inTable('branch').onUpdate('CASCADE').onDelete('CASCADE');
      table.datetime('rep_date');
      table.decimal('rep_totalSales');
      table.integer('rep_totalOrder');
      table.string('rep_csvPath', 255);
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('salesReport')
    .dropTable('delivery')
};
