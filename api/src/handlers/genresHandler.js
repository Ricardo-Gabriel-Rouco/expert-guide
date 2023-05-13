const {listGenres} = require('../controllers/db/getGenres')
// const {allGenres} = require('../controllers/db/populateGenres')

const getAllGenres = async(req, res ) =>{
  try {
    let genres = await listGenres()
    // console.log(genres)
    // if(!genres.length){
    //   throw new Error('Not Found')
    // } else {
    res.status(200).json(genres)
    // }
  } catch (error) {
    res.status(400).send(error)
  }
}


module.exports = {
  getAllGenres
}