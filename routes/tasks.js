const express = require('express');
const router = express.Router();
const Task = require('../models/task');
// const document = require('../docs/basicInfo');

// Get all tasks
router.get('/list', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
})

// Create one task
router.post('/create', async (req, res) => {
    const task = new Task({
        title: req.body.title
    })
    try {
        const newTask = await task.save();
        res.status(201).json({ message: 'successfully submitted to DB' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// Update one task
router.put('/:id', getTask, async (req, res) => {
    if(req.body.title != null) {
        res.task.title = req.body.title;
    }
    try{
        const updatedTask = await res.task.save();
        res.json({ message: 'successfully updated' })
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// Delete one task
router.delete('/:id', getTask, async (req, res) => {
    try {
        await res.task.remove();
        res.json({ message: 'Deleted successfully'})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

async function getTask(req, res, next) {
    let task;
    try {
        task = await Task.findById(req.params.id);
        if(task == null){
            return res.status(404).json({message: 'Task not found'});
        }
    } catch (err) {
        return res.status(500).json({message: err.message});
    }

    res.task = task;
    next();
}

// Documentation
/* router.get('/documentation', async (req, res) => {
    try {
        res.json(document);
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
}) */

module.exports = router