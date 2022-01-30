const {Schema} = require('mongoose'),
mongoose = require('mongoose')

module.exports = mongoose.model("Users", new Schema({
    nome: {type: String, allowNull: false},
    nomeMeio: {type: String},
    sobrenome: {type: String, allowNull: false},
    dataNascimento: {type: Date, allowNull: false},
    cpf: {type: Number, allowNull: false, unique: true},
    status: {type:String, enum: ["Ativo", "Inativo", "Bloqueado"], default: "Ativo"},
}))