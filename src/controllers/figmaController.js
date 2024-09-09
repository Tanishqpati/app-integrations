// src/controllers/figmaController.js
import figmaService from '../services/figmaService.js';
import BaseController from './baseController.js';

class FigmaController extends BaseController {
  async listUsers(req, res, next) {
    try {
      const { since, per_page } = req.query;
      const users = await figmaService.listUsers(since, per_page);
      this.sendResponse(res, 200, users);
    } catch (error) {
      this.handleError(next, error);
    }
  }
}

export default new FigmaController();