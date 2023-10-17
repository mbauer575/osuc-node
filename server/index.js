const path = require('path');
const express = require('express')
const app = express()
var plotly = require('plotly')("bauermax", "lXZoc2z08IzBj9V0G6S8")
const PORT = 3001



// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  // All other GET requests not handled before will return our React app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

// app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))

// app.set('views', './views')
// app.set('view engine', 'ejs')

// app.get('', (req, res) => {
//     res.render('index', { text: 'This is EJS' })
// })
// app.get('/index', (req, res) => {
//     res.render('index', { text: 'This is EJS' })
// })
// app.get('/test1', (req, res) => {
//     res.render('test1', { text: 'This is EJS' })
// })



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});