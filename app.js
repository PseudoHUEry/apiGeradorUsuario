require('dotenv').config()
const startServer = require('./interface')
const startDatabase = require('./infra/orm/mongoose/database')


try{
startDatabase()
startServer()
} catch(e) {
    console.error(e)
}