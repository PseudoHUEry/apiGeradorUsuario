const geradorDePessoas = require('../../application/use_case/geradorDePessoa')
module.exports = {
  index: (request) => {
    return "health!";
  },
  create: async (request) => {
    return await geradorDePessoas(request);
  },
  update: (request) => {
    return "health!";
  },
  delete: (request) => {
    return "health!";
  },
};
