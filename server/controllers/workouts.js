const express = require('express');
const { addWorkout, dropWorkout } = require('../models/users');

const app = express.Router();
app
.post('/:userName/:workoutName/:workoutQuantity/:workoutMonth/:workoutDay/:workoutYear', (req, res) => {
    res.send(addWorkout(req.params.userName, req.params.workoutName, req.params.workoutQuantity, req.params.workoutMonth, req.params.workoutDay, req.params.workoutYear));
})
.post('/drop/:userName/:workoutName/:workoutQuantity/:workoutMonth/:workoutDay/:workoutYear', (req, res) => {
    console.log("dropWorkout controller reached")
    res.send(dropWorkout(req.params.userName, req.params.workoutName, req.params.workoutQuantity, req.params.workoutMonth, req.params.workoutDay, req.params.workoutYear));
})

module.exports = app