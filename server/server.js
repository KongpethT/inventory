const express = require('express')
const { items } = require('./config/env')
//const cors = require('cors')
const { itmes } = require('./config/env')
const app = express()
if (process.env.NODE_ENV === 'development') { app.use(require('morgan')('dev')) } else { app.use(require('compression')()) }
app.use(require('cors')())
//app.use(cors())
app.use(express.json())

//router
app.use('/api/computer', require('./route/computer'))
app.use('/api/devicesModule', require('./route/devicesModule'))


app.listen(items.getServer.getPort, '0.0.0.0', () => {
    console.log(`Server up and running in http://127.0.0.1:${items.getServer.getPort}`)
    console.log(process.env.NODE_ENV);
})




