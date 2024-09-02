// src/routes/calendlyRoutes.js
import express from 'express';
import calendlyController from '../controllers/calendlyController.js';

const router = express.Router();

router.get('/users', calendlyController.inviteUser);

export default router;