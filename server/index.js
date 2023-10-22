const path = require('path');
const express = require('express')
const app = express()
const PORT = 8080
const sql = require('mssql')

const config = {
  user: 'your-username',
  password: 'your-password',
  server: 'sql-engr-cem-db.database.windows.net',
  database: 'your-database-name',
};

// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/api/testData', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM TestData');
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