const mongoose = require("mongoose");

module.exports = async () => {
 await mongoose.connect(process.env.LINK_DATABASE);
 console.log('Banco de dados conectado.')
};

