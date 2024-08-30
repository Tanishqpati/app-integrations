// src/routes/githubRoutes.js
import express from 'express';
import githubController from '../controllers/githubController.js';

const router = express.Router();

router.get('/users', githubController.getUsers);
router.get('/users/:username/delete', githubController.deleteUser);
router.get('/users/:username/create', githubController.createUser);

export default router;