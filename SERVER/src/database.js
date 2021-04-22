const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mean-employees", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("DB"))
  .catch((err) => console.log(err));