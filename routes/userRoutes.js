const express = require('express');
const { addUser , getUser, getUserById, deleteUser, updateUser} = require('../controllers/userController');
const router = express.Router();

// POST request to add a new user
router.post('/adduser', addUser);
router.get('/getuser', getUser);
router.get('/getuser/:name', getUserById)
router.delete('/getuser/:id', deleteUser)
router.patch('/getuser/:id', updateUser)



module.exports = router;


