require('dotenv').config()
const startServer = require('./interface')

try{
startServer()
} catch(e) {
    console.error(e)
}