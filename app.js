const express = require('express')
const app = express()
var plotly = require('plotly')("bauermax", "lXZoc2z08IzBj9V0G6S8")
const PORT = 8080




app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', { text: 'This is EJS' })
})
app.get('/index', (req, res) => {
    res.render('index', { text: 'This is EJS' })
})
app.get('/test1', (req, res) => {
    res.render('test1', { text: 'This is EJS' })
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

