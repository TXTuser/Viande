const Router = require('express')
const router = new Router()
const tableRouter = require('./tableRouter')

router.use('/table', tableRouter)


module.exports = router
