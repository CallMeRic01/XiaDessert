
exports.up = function(knex) {
  return knex.schema
    .table('detailsOrder', async function (table) {
      table.integer('detOrd_quantity').notNullable().alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('detailsOrder', async function (table) {
      table.integer('detOrd_quantity').nullable().alter();
    })
};
