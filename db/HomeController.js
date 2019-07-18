const mongoose = require('mongoose')
const Home = require('./index.js')

//currently doesn't use the home argument to keep the service standalone, would require refactor to use the home argument to establish a relation between the passed in object and the retrieved documents
module.exports.getRelatedHomes = (home, callback) => {
  Home.find((err, result) => {
    if(err) {
      console.log(err)
      callback(err)
    } else {
      callback(null, result)
    }
  }).limit(12)
}