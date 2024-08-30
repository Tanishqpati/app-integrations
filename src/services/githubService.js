// src/services/githubService.js
import axios from 'axios';

class GithubService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      },
    });
  }

  async listUsers(since = 0, perPage = 30) {
    try {
      const response = await this.apiClient.get('/users', {
        params: { since, per_page: perPage }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to list GitHub users: ${error.message}`);
    }
  }
}

export default new GithubService();