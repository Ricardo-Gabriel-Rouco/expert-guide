// const { Genre } = require('../../db')
const { getDocs,
query,
collection,
where,
doc,
getDoc } = require('firebase/firestore')
const {db} = require('../../firebase/firebase-config') 

async function listGenres (){
  try {
    const q = query(collection(db, "genres"))
    const querySnapshot = await getDocs(q)
    let data = []
    querySnapshot.forEach((doc) =>{
      data.push({
        ...doc.data(),
        id: doc.id
      })
    })
    return data
    // const result = await Genre.findAll()
    // return result
  } catch (error) {
    console.log(error)
  }
  
  
}

module.exports = {listGenres}