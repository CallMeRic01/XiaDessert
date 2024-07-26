
exports.up = function(knex) {
  return knex.schema
    .table('salesReport', async function (table) {
      table.decimal('rep_opening');
      table.decimal('rep_closing');
      table.decimal('rep_expenses');
      table.string('rep_remarks');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('salesReport', async function (table) {
      table.dropColumn('rep_opening');
      table.dropColumn('rep_closing');
      table.dropColumn('rep_expenses');
      table.dropColumn('rep_remarks');
    })
};
