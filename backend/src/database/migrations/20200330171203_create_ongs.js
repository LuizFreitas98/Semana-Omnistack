exports.up = function(knex) {
  knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').primary();
    table.string('email').primary();
    table.string('whatsapp').primary();
    table.string('city').primary();
    table.string('uf', 2).primary();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};
