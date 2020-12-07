const express = require('express')
const app =  express()
const path = require('path')
const port = 8000

app.use('/master', express.static('master'))
app.use(express.urlencoded())

app.set('view-engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req,res) => {
  res.render('index.pug')
})

app.listen(port, ()=> {
  console.log(`Running port ${port}`);
})