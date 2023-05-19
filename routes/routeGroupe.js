const express = require('express')
const { Groupe } = require('../Contoller/Controller')
const router = express.Router()


router.post('/connect',Groupe)

module.exports = router;