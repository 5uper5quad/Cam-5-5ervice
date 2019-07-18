const express = require('express')
const bodyParser = require('body-parser')
const {getRelatedHomes} = require('../db/HomeController.js')
const app = express()
const cors = require('cors')
const port = 3001


app.use(express.static(__dirname + '/../public'))
app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

  // handles requests to populate related homes in client
  app.get('/related', (req, res) => {
    //trigger database query for 12 entries
    //sorting and establishing of relation should be handled within the function that makes the query
    //thisHome is currently unused, would need to be retrieved from another service which would be an object representing the home that this service is rendering related homes for
    let thisHome = req.body
    getRelatedHomes(thisHome, (err, result) => {
      if(err) {
        console.log(err)
        res.status(403).send(err)
      } else {
        res.status(200).send(result)
      }
    })
  }) 

module.exports = app