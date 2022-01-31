const User = require("../orm/mongoose/Models/Users");

module.exports = {
  createUser: async (object) => {
    return await User.create(object);
  },
  createManyUser: async (Array) => {
    return await User.insertMany(Array, {rawResult: true})
  },
  findOneUser: async () => {
    return await User.findOne({});
  },
  findAllUsers: async () => {
    return await User.find();
  },
  updateUser: async (id, filter) => {
    return await User.findByIdAndUpdate(id, filter);
  },
  bloqUser: async (id) => {
    return await User.findByIdAndUpdate(id, { status: "Bloqueado" });
  },
  inativarUser: async (id) => {
    return await User.findByIdAndUpdate(id, { status: "Inativo" });
  },
};
