import express from 'express';
import calendlyController from '../controllers/calendlyController.js';

const router = express.Router();

router.post('/invite', calendlyController.inviteUser);

router.get('/users', calendlyController.listUsers);

router.delete('/users/:uuid', calendlyController.removeUser);

export default router;