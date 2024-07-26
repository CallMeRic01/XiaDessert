
exports.up = function(knex) {
  return knex.schema
    .createTable('user_clockInOut', async function (table) {
      table.increments('cIO_id');
      table.time('cIO_in');
      table.time('cIO_out');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user_clockInOut')
};
