// src/routes/githubRoutes.js
import express from 'express';
import githubController from '../controllers/githubController.js';

const router = express.Router();

router.get('/users', githubController.listUsers);

export default router;