// src/controllers/githubController.js
import githubService from '../services/githubService.js';

class GithubController {
  async listUsers(req, res, next) {
    try {
      const { since, per_page } = req.query;
      const users = await githubService.listUsers(since, per_page);
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
}

export default new GithubController();