import axios from 'axios';

class GithubService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      },
    });
  }

  setAuthorizationToken() {
    this.apiClient.defaults.headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  async listUsers(since = 0, perPage = 30) {
    try {
      this.setAuthorizationToken(); // Set the token before making the request
      const response = await this.apiClient.get('/orgs/Blynd-Dating/members', {
        params: { since, per_page: perPage }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to list GitHub users: ${error.message}`);
    }
  }

  async inviteUserToOrg(email, role='direct_member', teamIds=[]) {
    try {
      this.setAuthorizationToken();
      const response = await this.apiClient.post('/orgs/Blynd-Dating/invitations', {
        email,
        role,
        team_ids: teamIds
      });
      return response.data;
    } catch(error) {
      throw new Error(`Failed to invite user: ${error.message}`);
    }
  }

  async removeUserFromOrg(username) {
    console.log(username);
    
    try {
      console.log(username);
      
      this.setAuthorizationToken();
      await this.apiClient.delete(`/orgs/Blynd-Dating/members/${username}`);
      return { message: `User ${username} removed from organization` };
    } catch {
      console.log("failed to remove user");
      
      throw new Error(`Failed to remove user: ${error.message}`);
    }
  }
}

export default new GithubService();