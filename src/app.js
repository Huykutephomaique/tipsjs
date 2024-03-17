const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const compression = require('compression');
const initDb = require('./dbs/init.mongodb');
// init middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(compression());
// morgan('combined')//dev 
// morgan('common')
// morgan('short')//tiny

// init db
initDb;
const { checkOverload } = require('./helpers/check.connect')
checkOverload()
//init routes

app.get('/', (req, res, next) => {
    const strCompress = "repeat"
    return res.status(200).json({
        message: 'welcome ',
        metadata: strCompress.repeat(10000)
    })
    
})
module.exports = app 