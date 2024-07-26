
exports.up = function(knex) {
  return knex.schema
    .table('user_clockInOut', async function (table) {
      table.timestamp('cIO_hrsWorked').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user_clockInOut', async function (table) {
      table.string('cIO_hrsWorked', 255).alter();
    })
};
