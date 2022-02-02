const sql = require("./db.js");

// constructor
const Film = function(film) {
  this.title = film.title;
  this.description = film.description;
  this.rating = film.rating;
  this.release_year = film.release_year;
};

Film.getAll = result => {
  sql.query("SELECT title, description, rating, release_year FROM film", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Films: ", res);
    result(null, res);
  });
};


module.exports = Film;