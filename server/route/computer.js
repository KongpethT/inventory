const express = require('express')
const router = express.Router()

const { gets } = require('../controller/computer')


router.route('/')
   .get(gets)


module.exports = router