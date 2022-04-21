const express = require('express');

const apiController = require('../controllers/api.controller');

const router = express.Router();

// Endpoint for getting all the records
router.get('/', apiController.getUsers);

// Endpoint for creating a new record
router.post('/new', apiController.addUser);

// Endpoints for updating/deleting a record
router.route('/:id').put(apiController.updateUser).delete(apiController.deleteUser);

module.exports = router;
