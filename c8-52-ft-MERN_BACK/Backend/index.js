const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('dotenv/config')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
const port = process.env.PORT
app.listen(port, () => {
  console.log(`servidor en puerto ${port}`)
})