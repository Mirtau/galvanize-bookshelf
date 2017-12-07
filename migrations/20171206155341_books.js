
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', table =>{
table.increments().notNull()
table.string('title').notNull().defaultTo('')
table.string('author').notNull().defaultTo('')
table.string('genre').notNull().defaultTo('')
table.text('description').notNull().defaultTo('')
table.text('cover_url').notNull().defaultTo('')
table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('books')
};
