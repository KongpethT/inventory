const mysql = require('mysql2')
const connectURL = {
    host: '10.180.0.1',
    user: 'inventory',
    password: 'ishow2010',
    database: 'inventory',
    port: '3306',
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
}
const server = {
    getPort: '3002'
}
const connect = {
    getDb: mysql.createPool(connectURL)
}

const items = {
    getServer: server,
    getConnec: connect
}

module.exports = { items }