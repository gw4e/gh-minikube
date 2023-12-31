const express = require('express');

// use process.env variables to keep private variables,
// be sure to ignore the .env file in github
require('dotenv').config();

// Express Middleware
const helmet = require('helmet'); // creates headers that protect from attacks (security)
const bodyParser = require('body-parser'); // turns response into usable format
const cors = require('cors');  // allows/disallows cross-site communication
const morgan = require('morgan'); // logs requests

// db Connection w/ localhost
const db = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,  //'postgresql-service', // Use the ClusterIP service name
    user: process.env.DATABASE_USER, // 'postgres', // PostgreSQL username
    password: process.env.DATABASE_PWD, // 'password', // PostgreSQL password
    database: process.env.DATABASE_NAME // 'mydb' // PostgreSQL database name
  }
});


async function printTableRowCount() {
  try {
    const rowCount = await db('testtable1').count('id');
    const count = rowCount[0]['count'];

    console.log(`Number of rows in testtable1: ${count}`);
  } catch (error) {
    console.error('Error querying the database:', error);
  }
}

printTableRowCount();

// Controllers - aka, the db queries
const main = require('./controllers/main');

// App
const app = express();

// App Middleware

const corsOptions = {
  origin: function (origin, callback) {
      callback(null, true)
  }
};
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan('combined')); // use 'tiny' or 'combined'

// App Routes - Auth
app.get('/healthcheck', (req, res) => res.send('API Server started'));
app.get('/crud', (req, res) => main.getTableData(req, res, db));
app.post('/crud', (req, res) => main.postTableData(req, res, db));
app.put('/crud', (req, res) => main.putTableData(req, res, db));
app.delete('/crud', (req, res) => main.deleteTableData(req, res, db));

// App Server Connection
app.listen(process.env.PORT || 3001, () => {
  console.log(`app is running on port ${process.env.PORT || 3001}`)
});
