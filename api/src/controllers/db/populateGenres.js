require('dotenv').config()
const {API_KEY} = process.env

const allGenres = async () => {
  const checkData = await Genre.findAll()
  if (checkData.length < 2) {
    const genresFromApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const promises = genresFromApi.data.results.map(g => {
      return Genre.create({
        id: g.id,
        name: g.name
      })
    })
    return Promise.all(promises)
  }
}

module.exports = {allGenres}