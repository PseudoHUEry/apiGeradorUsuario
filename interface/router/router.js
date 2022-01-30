module.exports = [{
    method: "GET",
    path: "/health",
    handler: require('../controller/controllerUser').index
},
{
    method: "POST",
    path: "/gerar",
    handler: require('../controller/controllerUser').create
}
]