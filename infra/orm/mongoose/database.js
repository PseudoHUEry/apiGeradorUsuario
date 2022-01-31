const mongoose = require("mongoose"),
  environ = require("../../env/environ");

module.exports = async () => {
  if (environ.nodeEnv == "staging") {
    await mongoose.connect(environ.linkDb);
  }
  if (environ.nodeEnv == "development") {
    await mongoose.connect("mongodb://db/dev-geradorUsers");
  }
  console.log("Banco de dados conectado.");
};
