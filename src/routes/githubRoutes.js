// src/routes/githubRoutes.js
import express from "express";
import githubController from "../controllers/githubController.js";

const router = express.Router();

router.get("/users", githubController.listUsers);
router.post("/add-user", githubController.inviteUser);
router.delete("/remove-user/:username", githubController.removeUser);

export default router;
