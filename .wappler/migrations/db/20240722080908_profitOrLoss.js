
exports.up = function(knex) {
  return knex.schema
    .table('salesReport', async function (table) {
      table.decimal('rep_proLoss');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('salesReport', async function (table) {
      table.dropColumn('rep_proLoss');
    })
};
