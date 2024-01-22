require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('sambhavdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1> mujhe naukri dilva do </h1> ')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>Sambhav Singh</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})