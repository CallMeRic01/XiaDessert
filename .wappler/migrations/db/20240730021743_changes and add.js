
exports.up = function(knex) {
  return knex.schema
    .table('user_clockInOut', async function (table) {
      table.datetime('cIO_in').alter();
      table.datetime('cIO_out').alter();
      table.date('cIO_date');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user_clockInOut', async function (table) {
      table.timestamp('cIO_in').alter();
      table.timestamp('cIO_out').alter();
      table.dropColumn('cIO_date');
    })
};
