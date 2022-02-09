const express = require('express')
const { server } = require('./config/env')
const app = express()
if (process.env.NODE_ENV === 'development') { app.use(require('morgan')('dev')) } else { app.use(require('compression')()) }
app.use(require('cors'))
app.use(express.json())

//router
app.use('/api/computer',require('./route/computer'))


app.listen('30003', '0.0.0.0', () => {
    console.log(`Server up and running in http://127.0.0.1:${server.getPort}`)
    console.log(process.env.NODE_ENV);
})




