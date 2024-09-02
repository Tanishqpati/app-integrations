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

  async inviteUser(req, res, next) {
    try {
      const { email, role, team_ids } = req.body;
      console.log(email, role, team_ids);
      
      const result = await githubService.inviteUserToOrg(email, role, team_ids);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async removeUser(req, res, next) {
    try {
      const { username } = req.params;
      
      const result = await githubService.removeUserFromOrg(username);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new GithubController();