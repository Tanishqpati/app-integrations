// src/routes/todoistRoutes.js
import express from 'express';
import todoistController from '../controllers/todoistController.js';

const router = express.Router();

router.get('/users', todoistController.getUsers);
router.get('/users/:username/delete', todoistController.deleteUser);
router.get('/users/:username/create', todoistController.createUser);

export default router;