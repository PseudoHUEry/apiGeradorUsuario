const geradorDePessoas = require("../../application/use_case/geradorDePessoa");
const repositoryUser = require("../../infra/repository/repositoryUser");
module.exports = {
  index: (request) => {
    return "health!";
  },
  create: async (request) => {
    return await geradorDePessoas(request);
  },
  getOne: async () => {
    return await repositoryUser.findOneUser()
  },
  getAll: async() => {
    return await repositoryUser.findAllUsers()
  },
  delete: (request) => {
    return "health!";
  },
};
