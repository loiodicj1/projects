const express = require('express');
const { addWorkout, dropWorkout, dropWorkoutAtIndex } = require('../models/users');

const app = express.Router();
app
.post('/:userName/:workoutName/:workoutQuantity/:workoutMonth/:workoutDay/:workoutYear', (req, res) => {
    res.send(addWorkout(req.params.userName, req.params.workoutName, req.params.workoutQuantity, req.params.workoutMonth, req.params.workoutDay, req.params.workoutYear));
})
.delete('/:userName/:workoutName/:workoutQuantity/:workoutMonth/:workoutDay/:workoutYear', (req, res) => {
    res.send(dropWorkout(req.params.userName, req.params.workoutName, req.params.workoutQuantity, req.params.workoutMonth, req.params.workoutDay, req.params.workoutYear));
})
.delete('/:userName/:i', (req, res) => {
    res.send(dropWorkoutAtIndex(req.params.userName, req.params.i));
})

module.exports = app