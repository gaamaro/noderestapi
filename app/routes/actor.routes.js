module.exports = app => {
    const actors = require("../controllers/actor.controller.js");
    
    // Retrieve all Customers
    app.get("/actors", actors.findAll);
  };