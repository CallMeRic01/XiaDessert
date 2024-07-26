
exports.up = function(knex) {
  return knex.schema
    .createTable('role', async function (table) {
      table.increments('role_id');
      table.string('role');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id').inTable('user');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('role')
};
