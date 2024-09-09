// src/routes/userRoutes.js
import express from 'express';
import githubController from '../controllers/githubController.js';
import calendlyController from '../controllers/calendlyController.js';
import figmaController from '../controllers/figmaController.js';

const router = express.Router();

// Map service names to controllers
const controllers = {
  github: githubController,
  calendly: calendlyController,
  figma: figmaController
};

router.use('/:service', (req, res, next) => {
  const { service } = req.params;
  const controller = controllers[service];
  
  if (!controller) {
    return res.status(404).json({ message: `Service ${service} not found` });
  }

  req.controller = controller;
  next();
});

router.get('/:service/users', (req, res, next) => {
  req.controller.listUsers(req, res, next);
});

router.post('/:service/invite', (req, res, next) => {
  req.controller.inviteUser(req, res, next);
});

router.delete('/:service/remove', (req, res, next) => {
  req.controller.removeUser(req, res, next);
});

export default router;