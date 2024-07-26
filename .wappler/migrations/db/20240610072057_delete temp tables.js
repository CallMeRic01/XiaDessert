
exports.up = function(knex) {
  return knex.schema
    .dropTable('images')
    .dropTable('countries')
    .dropTable('cars')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('cars', async function (table) {
      table.increments('id').primary().notNullable();
      table.string('make', 50);
      table.string('model', 50);
      table.string('year', 50);
    })
    .createTable('countries', async function (table) {
      table.increments('id').primary().notNullable();
      table.string('country_code', 2).notNullable();
      table.string('country_name', 100).notNullable();
    })
    .createTable('images', async function (table) {
      table.increments('id').primary().notNullable();
      table.string('image', 50);
      table.text('description', 65535);
      table.string('category', 12);
      table.string('author', 50);
      table.date('date');
    })
};
