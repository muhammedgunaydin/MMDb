const express = require('express')
const movieController = require('../controllers/movieController')

const router = express.Router()

router.route('/create').post(movieController.createMovie)
router.route('/').get(movieController.getMovies)
router.route('/:id').get(movieController.GetMovie)
router.route('/:id').patch(movieController.UpdateMovie)
router.route('/:id').delete(movieController.deleteMovie)

module.exports = router
