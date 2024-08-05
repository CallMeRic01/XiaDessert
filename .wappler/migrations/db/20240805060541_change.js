
exports.up = function(knex) {
  return knex.schema
    .table('user_clockInOut', async function (table) {
      table.decimal('cIO_hrsWorked').defaultTo((10,2)).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('user_clockInOut', async function (table) {
      table.timestamp('cIO_hrsWorked', 255).defaultTo().alter();
    })
};
