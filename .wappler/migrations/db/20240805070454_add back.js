
exports.up = function(knex) {
  return knex.schema
    .table('user_clockInOut', async function (table) {
      table.time('cIO_hrsWorked');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user_clockInOut', async function (table) {
      table.dropColumn('cIO_hrsWorked');
    })
};
