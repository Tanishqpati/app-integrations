// src/services/figmaService.js
import CloudService from './cloudService.js';

class FigmaService extends CloudService {
  constructor() {
    super('https://api.figma.com', 'FIGMA_TOKEN');
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
}

export default new FigmaService();