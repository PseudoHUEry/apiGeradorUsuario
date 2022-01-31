module.exports = [{
    method: "GET",
    path: "/health",
    handler: require('../controller/controllerUser').index
},
{
    method: "POST",
    path: "/gerar",
    handler: require('../controller/controllerUser').create
},
{
    method: "GET",
    path: "/pegarUm",
    handler: require('../controller/controllerUser').getOne
},
{
    method: "GET",
    path: "/pegarTodos",
    handler: require('../controller/controllerUser').getAll
}
]