const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => response.render('index', { showdata }))

app.get('/season/:season', (request, response) => {
  const requestedSeason = parseInt(request.params.season)

  if (requestedSeason <= showdata.seasons.length) {
    const validSeason = showdata.seasons.find((season) => season.number === requestedSeason)

    return response.render('season', {
      title: showdata.title,
      season: validSeason
    })
  }
  else {
    return response.status(404).send('This Season Does Not Exist')
  }
})

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(7779, () => {
  console.log('PORT 7779 is listening...') // eslint-disable-line no-console
})
