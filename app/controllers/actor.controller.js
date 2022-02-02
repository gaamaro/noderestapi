const Actor = require("../models/actor.model.js");

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Actor.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };