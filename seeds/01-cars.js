exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars-updated")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars-updated").insert([
        {
          VIN: "2434dfs435",
          Make: "Ferrari",
          Model: "488",
          Mileage: "5,000",
          Transmission: "Manual",
          Title: "Clean",
        },
        {
          VIN: "54jkl6h7",
          Make: "Mercedes",
          Model: "AMG",
          Mileage: "8,000",
          Transmission: "Manual",
        },
        {
          VIN: "5j4kl6g5l",
          Make: "Lamborghini",
          Model: "Huracan",
          Mileage: "10,000",
          Title: 'Salvage'
        },
      ]);
    });
};
