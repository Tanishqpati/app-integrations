// src/services/calendlyService.js
import CloudService from './cloudService.js';

class CalendlyService extends CloudService {
  constructor() {
    super('https://api.calendly.com', 'CALENDLY_TOKEN');
  }

  async inviteUserToOrg(email) {
    try {
      this.setAuthorizationToken();
      const response = await this.apiClient.post(`/organizations/${process.env.CALENDLY_ORG_ID}/invitations`, {
        email,
      });
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }

  async listOrganizationMembers() {
    try {
      this.setAuthorizationToken();
      const response = await this.apiClient.get('/organization_memberships');
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }

  async removeUserFromOrg(uuid) {
    try {
      this.setAuthorizationToken();
      const response = await this.apiClient.delete(`/organization_memberships/${uuid}`);
      return { message: `User with UUID ${uuid} removed from organization`, data: response.data };
    } catch (error) {
      this.handleApiError(error);
    }
  }
}

export default new CalendlyService();