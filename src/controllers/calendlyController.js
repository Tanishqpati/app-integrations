import calendlyService from '../services/calendlyService.js';

class CalendlyController {
  async inviteUser(req, res, next) {
    try {
      const { email } = req.body;
      const result = await calendlyService.inviteUserToOrg(email);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async listUsers(req, res, next) {
    try {
      const users = await calendlyService.listOrganizationMembers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async removeUser(req, res, next) {
    try {
      const { uuid } = req.params;
      const result = await calendlyService.removeUserFromOrg(uuid);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new CalendlyController();