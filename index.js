const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(7777, () => {
  // Already using 1337 for other project
  console.log('PORT 7777 is here for you and willing to listen...') // eslint-disable-line no-console
})
