moment = require("moment");

module.exports = function({data}){
data = data.values[0];
let obj = {}
obj.nome = data.nome.split(" ")[0];
obj.nomeMeio = data.nome.split(" ")[1];
obj.sobrenome = data.nome.split(" ")[2];
obj.cpf = data.cpf.replace(/[^0-9]/g, "");
obj.dataNascimento = moment(data.dataNascimento, "DD-MM-YYYY");
return obj
}