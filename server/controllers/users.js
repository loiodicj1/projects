const express = require('express');
const users = require('../models/users');

const app = express.Router();
app 
    .get('/', (req, res, next) => {
        //users.getUsers()
        //.then(x=> res.status(200).send(x))
        //.catch(next)
        res.send(users.getUsers())
    })
    .get('/:id', (req, res, next) => {
        users.getUser(req.params.id)
        .then(user=> {
            if (user) {
                res.status(200).send(user)
            } else {
                res.status(404).send('user not found')
            }            
        })
        .catch(next)
    })
    .post('/:name/:admin', (req, res, next) => {
        res.send(users.addUser(req.params.name, req.params.admin))
    })
    .post('/seed', (req, res, next) => {
        res.send(users.seedUsers())
    })
    .patch(`/:name`, (req, res, next) => {
        res.send(users.dropUser(req.params.name))
    });

module.exports = app