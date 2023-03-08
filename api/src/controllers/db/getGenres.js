const { Genre } = require('../../db')

async function listGenres (){
  try {
    const result = await Genre.findAll()
    return result
  } catch (error) {
    return error
  }
  
  
}

module.exports = {listGenres}