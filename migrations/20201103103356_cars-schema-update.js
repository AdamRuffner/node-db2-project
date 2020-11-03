
exports.up = function(knex) {
    return knex.schema.createTable("cars-updated", (tbl) => {
        tbl.increments();
        tbl.text("VIN", 128).unique().notNullable();
        tbl.text("Make", 128).notNullable();
        tbl.text("Model", 128).notNullable();
        tbl.text("Mileage").notNullable();
        tbl.text("Transmission");
        tbl.text("Title");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars-updated");
};
