const environ = require("../../infra/env/environ"),
  repositoryUser = require("../../infra/repository/repositoryUser"),
  { default: axios } = require("axios"),
  moment = require("moment");

module.exports = async ({ payload }) => {
  let { qtn } = payload,
    obj = {},
    { data } = await axios("https://geradorbrasileiro.com/api/faker/pessoa");
  data = data.values[0];
  obj.nome = data.nome.split(" ")[0];
  obj.nomeMeio = data.nome.split(" ")[1];
  obj.sobrenome = data.nome.split(" ")[2];
  obj.cpf = data.cpf.replace(/[^0-9]/g, "");
  obj.dataNascimento = moment(data.dataNascimento, "DD-MM-YYYY");
  
  return await repositoryUser.createUser(obj);;
};
