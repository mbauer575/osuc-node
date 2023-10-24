const path = require('path');
const express = require('express')
const app = express()
const PORT = 8080
const sql = require('mssql')
require('dotenv').config();



const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
};


const tableName = "resTest1"



// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/api/testData', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query("SELECT * FROM energy_data");
    console.log(result.recordset); // add this line to print the test data to console
    res.send(result.recordset);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

//gets the last 24 hours of Res Hall data
app.get('/api/ResHall/last24Hours', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query(`SELECT * FROM ${tableName} WHERE dateTime >= DATEADD(day, -1, GETUTCDATE()) ORDER BY dateTime ASC`);
    res.send(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

//gets the last week of Res Hall data
app.get('/api/ResHall/lastWeek', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query(`SELECT * FROM ${tableName} WHERE dateTime >= DATEADD(week, -1, GETUTCDATE()) ORDER BY dateTime ASC`);
    res.send(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/api/ResHall/lastMonth', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query(`SELECT * FROM ${tableName} WHERE dateTime >= DATEADD(month, -1, GETUTCDATE()) ORDER BY dateTime ASC`);
    res.send(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/api/ResHall/lastYear', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query(`SELECT * FROM ${tableName} WHERE dateTime >= DATEADD(year, -1, GETUTCDATE()) ORDER BY dateTime ASC`);
    res.send(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});