
exports.up = function(knex) {
  return knex.schema
    .table('detailsOrder', async function (table) {
      table.datetime('detOrd_date');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsOrder', async function (table) {
      table.dropColumn('detOrd_date');
    })
};
