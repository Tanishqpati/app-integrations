// src/controllers/calendlyController.js
import calendlyService from '../services/calendlyService.js';
import BaseController from './baseController.js';

class CalendlyController extends BaseController {
  async inviteUser(req, res, next) {
    try {
      const { email } = req.body;
      const result = await calendlyService.inviteUserToOrg(email);
      this.sendResponse(res, 200, result);
    } catch (error) {
      this.handleError(next, error);
    }
  }

  async listUsers(req, res, next) {
    try {
      const users = await calendlyService.listOrganizationMembers();
      this.sendResponse(res, 200, users);
    } catch (error) {
      this.handleError(next, error);
    }
  }

  async removeUser(req, res, next) {
    try {
      const { uuid } = req.params;
      const result = await calendlyService.removeUserFromOrg(uuid);
      this.sendResponse(res, 200, result);
    } catch (error) {
      this.handleError(next, error);
    }
  }
}

export default new CalendlyController();