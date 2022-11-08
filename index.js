const express = require('express')
const volleyball = require('volleyball')
const dbConn = require('./db/dbConn')
const movieRoute = require('./routes/movieRoute')

const app = express()

app.use(volleyball)
app.use(express.json())

app.use('/movie',movieRoute)

const port = 3000
app.listen(port, () => {
  console.log(`App listening on ${port}`)
})
