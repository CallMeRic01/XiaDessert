
exports.up = function(knex) {
  return knex.schema
    .createTable('user', async function (table) {
      table.increments('user_id');
      table.string('user_firstName');
      table.string('user_lastName');
      table.string('user_email');
      table.string('user_pw');
      table.datetime('user_dateSignup').defaultTo(knex.fn.now());
      table.string('user_authCode');
      table.string('user_validated');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user')
};
