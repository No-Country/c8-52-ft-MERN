const { Router } = require('express')
const { getUsers } = require('../controllers/userC')
const route = Router()

route.get('/', getUsers)

module.exports = route
