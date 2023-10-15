const express = require('express')
const app = express()



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

app.get('/test1', (req, res) => {
    res.render('test1', { text: 'This is EJS' })
})




app.listen(PORT, () => console.info(`Server has started on ${PORT}`))
