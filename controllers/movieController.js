const Movie = require('../models/Movie')

exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body)

    res.status(201).send(`${movie.Title} created successfully`)
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err,
    })
  }
}

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find()

    res.status(200).json({ movies })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err,
    })
  }
}

exports.GetMovie = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findOne({ MMDbID: id })

    res.status(200).json({ movie })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err,
    })
  }
}

exports.UpdateMovie = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findOneAndUpdate(
      { MMDbID: id },
      { $set: req.body }
    )
    res.status(200).json({ movie })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err,
    })
  }
}

exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findOneAndDelete({ MMDbID: id })
    if (!movie) return res.send('Movie does not exist')

    res.status(200).json({ msg: `Movie removed successfully` })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err,
    })
  }
}
