const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Year: {
    type: Number,
  },
  MMDbID: {
    type: Number,
    required: true,
    unique: true,
  },
  Type: {
    type: String,
  },
  Poster: {
    type: String,
  },
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie
