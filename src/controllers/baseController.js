// src/controllers/baseController.js
class BaseController {
    sendResponse(res, statusCode, data) {
      res.status(statusCode).json(data);
    }
  
    handleError(next, error) {
      next(error);
    }
  }
  
  export default BaseController;