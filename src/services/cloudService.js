// src/services/cloudService.js
import axios from 'axios';

class CloudService {
  constructor(baseURL, tokenKey) {
    this.apiClient = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.tokenKey = tokenKey;
  }

  setAuthorizationToken() {
    this.apiClient.defaults.headers['Authorization'] = `Bearer ${process.env[this.tokenKey]}`;
  }

  handleApiError(error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
}

export default CloudService;