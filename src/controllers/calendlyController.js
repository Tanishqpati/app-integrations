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
}

export default new CalendlyController();