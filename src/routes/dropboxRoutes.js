// src/routes/dropboxRoutes.js
import express from 'express';
import dropboxRoutes from '../controllers/dropboxRoutes.js';

const router = express.Router();

router.get('/users', dropboxRoutes.getUsers);
router.get('/users/:username/delete', dropboxRoutes.deleteUser);
router.get('/users/:username/create', dropboxRoutes.createUser);

export default router;