const sql = require("./db.js");

// constructor
const Actor = function(actor) {
    this.first_name = actor.first_name;
    this.last_name = actor.last_name;
    this.last_update = actor.last_update;
}

Actor.getAll = result => {
    sql.query("SELECT * FROM actor", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Actors: ", res);
      result(null, res);
    });
  };


module.exports = Actor;