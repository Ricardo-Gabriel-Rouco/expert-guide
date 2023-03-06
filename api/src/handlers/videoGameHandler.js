const {searchById} = require('../middlewares/getGamesByID')

const searchGameId = async(req, res) =>{
  const id = req.params.id
  if(id){
    try {
      let results = await searchById(id)
        if(!results){
          throw new Error ('Not found')
        } else {
          res.status(200).send(results)
        }
    } catch (error) {
      res.status(400).json(error)
    }
  } else {
    throw new Error('No Id')
  }
}

module.exports = {
  searchGameId
}