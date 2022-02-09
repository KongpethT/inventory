const { items } = require('../config/env')

//@router POST api/brand/gets
exports.postsBrand = (req, res) => {
    const brick = req.body
    const name = brick.getBrand
    console.log(name);
    if (name !== undefined) {
        const sqlString = `INSERT INTO brand (name)value('${name}')`
        items.getConnec.getDb.query(sqlString, (error, result) => {
            if (error) { (process.env.NODE_ENV === 'development' ? console.log(error) : res.send(error.code)) } else { res.send(result) }
        })
    } else {
        res.send('error function')
    }
}
//@router GET api/brand/gets
exports.getsBrand = (req, res) => {
    console.log('workHere')
}
//@router PUT api/brand/puts
exports.putsBrand = (req, res) => {
}
//@router DELETE api/brand/deletes
exports.deletesBrand = (req, res) => {
}