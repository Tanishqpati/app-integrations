import axios from 'axios';

class CalendlyService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://api.calendly.com',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  setAuthorizationToken() {
    this.apiClient.defaults.headers['Authorization'] = `Bearer ${process.env.CALENDLY_TOKEN}`;
  }

  async inviteUserToOrg(email) {
    try {
      this.setAuthorizationToken();
      const response = await this.apiClient.post(`/organizations/${process.env.CALENDLY_ORG_ID}/invitations`, {
        email
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to invite user: ${error.response ? error.response.data.message : error.message}`);
    }
  }

  
}

export default new CalendlyService();