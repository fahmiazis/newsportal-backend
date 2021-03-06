const route = require('express').Router()
const user = require('../controllers/users')
const upload = require('../helpers/upload')

route.patch('/update', user.update)
route.patch('/image', upload, user.upload)
route.get('/', user.getProfile)

module.exports = route
