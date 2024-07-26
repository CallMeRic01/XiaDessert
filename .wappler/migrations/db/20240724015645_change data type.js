
exports.up = function(knex) {
  return knex.schema
    .table('user_clockInOut', async function (table) {
      table.timestamp('cIO_in').alter();
      table.timestamp('cIO_out').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user_clockInOut', async function (table) {
      table.time('cIO_in').alter();
      table.time('cIO_out').alter();
    })
};
