const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000

const app = express()

app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./server/routes')(app)
app.get('*', (req, res) => {
  res.status(200).send({
    message: 'Welcome!',
  })
})

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`)
})
