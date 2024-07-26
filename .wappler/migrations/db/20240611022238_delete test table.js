
exports.up = function(knex) {
  return knex.schema
    .dropTable('notOrder')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('notOrder', async function (table) {
      table.increments('ord_id').primary().notNullable();
    })
};
