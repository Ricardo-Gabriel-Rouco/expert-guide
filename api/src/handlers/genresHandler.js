const {listGenres} = require('../controllers/db/getGenres')
// const {allGenres} = require('../controllers/db/populateGenres')

const getAllGenres = async(req, res ) =>{
  try {
    let genres = await listGenres()
    if(!genres.length){
      throw new Error('Not Found')
    } else {
      res.status(200).send(genres)
    }
  } catch (error) {
    res.status(400).send(error)
  }
}

// const createGenres = async(req, res) => {
//   try {
//     const populate = await allGenres()
//     res.status(200).send(populate)
//   } catch (error) {
//     res.status(400).json(error)
//   }
// }

module.exports = {
  getAllGenres,
  createGenres
}