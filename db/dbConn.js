const mongoose = require('mongoose')

const db = mongoose
  .connect('mongodb://127.0.0.1/MMDb-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })

exports.module = db
