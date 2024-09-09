// src/services/githubService.js
import CloudService from './cloudService.js';

class GithubService extends CloudService {
  constructor() {
    super('https://api.github.com', 'GITHUB_TOKEN');
  }

  async listUsers(since = 0, perPage = 30) {
    try {
      this.setAuthorizationToken();
      const response = await this.apiClient.get('/orgs/Blynd-Dating/members', {
        params: { since, per_page: perPage },
      });
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }

  async inviteUserToOrg(email, role = 'direct_member', teamIds = []) {
    try {
      this.setAuthorizationToken();
      const response = await this.apiClient.post('/orgs/Blynd-Dating/invitations', {
        email,
        role,
        team_ids: teamIds,
      });
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }

  async removeUserFromOrg(username) {
    try {
      this.setAuthorizationToken();
      await this.apiClient.delete(`/orgs/Blynd-Dating/members/${username}`);
      return { message: `User ${username} removed from organization` };
    } catch (error) {
      this.handleApiError(error);
    }
  }
}

export default new GithubService();