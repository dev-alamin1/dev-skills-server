const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Dev Skill Server running...')
})

app.listen(port, () => {
  console.log(`Dev Skill app listening on port ${port}`)
})