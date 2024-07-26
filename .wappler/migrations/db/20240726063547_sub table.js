
exports.up = function(knex) {
  return knex.schema
    .table('productByDay', async function (table) {
      table.renameColumn('pd_days', 'pd_day');
      table.undefined('pro_id');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('productByDay', async function (table) {
      table.renameColumn('pd_day', 'pd_days');
      table.dropColumn('pro_id');
    })
};
