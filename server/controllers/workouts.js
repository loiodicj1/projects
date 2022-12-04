const express = require('express');
const { addWorkout } = require('../models/users');

const app = express.Router();
app.post('/:userName/:workoutName/:workoutQuantity/:workoutMonth/:workoutDay/:workoutYear', (req, res) => {
    res.send(addWorkout(req.params.userName, req.params.workoutName, req.params.workoutQuantity, req.params.workoutMonth, req.params.workoutDay, req.params.workoutYear));
})

module.exports = app