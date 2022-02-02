module.exports = app => {
    const films = require("../controllers/film.controller.js");
    
    // Retrieve all Customers
    app.post("/films", films.findAll);
  };