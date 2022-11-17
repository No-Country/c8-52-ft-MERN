const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv/config')
const routesUsers = require('./routes/users.routes')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/users', routesUsers)
const port = process.env.PORT

app.listen(port, () => {
  console.log(`servidor en puerto ${port}`)
})