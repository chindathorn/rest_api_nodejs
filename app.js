const express = require('express')
// 1.Execute
const app = express();
const mongooe = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

// 8.Middlewares
app.use(cors())

// 7.Post reqest
app.use(bodyParser.json())

// 5.Import ROUTES
const postsRoute = require('./routes/posts')

// 6.Middlewares
app.use('/posts', postsRoute)

// 2.ROUTES
// get(), path(), delete(), post()
app.get('/', (req, res) => {
  res.send('We are on home')
})

// 4.Connect To DB
mongooe.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB!'))

// 3.How we start listening to the server
app.listen(3000)