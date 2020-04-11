const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const dotenv = require('dotenv')

const transactions = require('./routes/transactions')

dotenv.config({ path: './config/config.env'})
const PORT = process.env.PORT || 4000
const app = express()

app.use('/api/v1/transactions', transactions)

app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} on port ${PORT}`.bold.yellow))