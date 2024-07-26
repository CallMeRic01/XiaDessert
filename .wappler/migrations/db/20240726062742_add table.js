
exports.up = function(knex) {
  return knex.schema
    .createTable('productByDay', async function (table) {
      table.increments('pd_id');
      table.enum('pd_days', ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]);
      table.integer('pro_id').unsigned();
      table.foreign('pro_id').references('pro_id').inTable('product').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('productByDay')
};
