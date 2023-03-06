const {Router} = require('express')

const genresRouter = Router()
const {createGenres, getAllGenres} = require('../handlers/genresHandler')

genresRouter.get('/',  createGenres)
genresRouter.get('/', getAllGenres)

module.exports = genresRouter