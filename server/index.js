require("dotenv").config()
const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const usersModel = require('./models/users')
const usersController= require('./controllers/users')
const workoutsController= require('./controllers/workouts')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use('/', express.static('./client/dist'));
app.use(express.json());
app
.get('/error', (req, res) => {
    res.status(404).send('error');
})
.use('/api/v1/users', usersController)
.use('/api/v1/workouts', workoutsController)

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: './client/dist'});
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status( err.httpCode ?? 500).send({
        message: err.message ?? 'Something went wrong',
        status: err.httpCode ?? 500
    });
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});