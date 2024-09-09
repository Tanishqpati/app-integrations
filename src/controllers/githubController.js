// src/controllers/githubController.js
import githubService from '../services/githubService.js';
import BaseController from './baseController.js';

class GithubController extends BaseController {
  async listUsers(req, res, next) {
    try {
      const { since, per_page } = req.query;
      const users = await githubService.listUsers(since, per_page);
      this.sendResponse(res, 200, users);
    } catch (error) {
      this.handleError(next, error);
    }
  }

  async inviteUser(req, res, next) {
    try {
      const { email, role, team_ids } = req.body;
      const result = await githubService.inviteUserToOrg(email, role, team_ids);
      this.sendResponse(res, 200, result);
    } catch (error) {
      this.handleError(next, error);
    }
  }

  async removeUser(req, res, next) {
    try {
      const { username } = req.params;
      const result = await githubService.removeUserFromOrg(username);
      this.sendResponse(res, 200, result);
    } catch (error) {
      this.handleError(next, error);
    }
  }
}

export default new GithubController();