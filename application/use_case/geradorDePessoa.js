const environ = require("../../infra/env/environ"),
  repositoryUser = require("../../infra/repository/repositoryUser"),
  { default: axios } = require("axios"),
  modelUser = require("../../domain/User");

module.exports = async ({ payload }) => {
  let arr = [],
    { qnt } = JSON.parse(payload);
  evaluate = qnt ?? 1;
  for (let i = 0; i <= evaluate; i++) {
    let link = modelUser(
      await axios("https://geradorbrasileiro.com/api/faker/pessoa")
    );
    arr.push(link);
  }
  let intacedLinks = await repositoryUser.createManyUser(arr);
  return intacedLinks.insertedIds;
};
