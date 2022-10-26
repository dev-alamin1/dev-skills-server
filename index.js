const express = require('express')
// cors middleware 
const cors = require('cors')
const app = express()
const port = 5000
const courses = require('./data/courses.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Dev Skill Server running...')
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.listen(port, () => {
  console.log(`Dev Skill app listening on port ${port}`)
})