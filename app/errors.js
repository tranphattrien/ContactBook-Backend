const { response } = require("../app");

class BadRequestError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

class ErrorHander {
  constructor() {
    this.handlerError = (error, responseStream = null) => {
      if (responseStream) {
        responseStream.status(error.statusCode || 500).json({
          message: error.message || "Internal Server Error"
        });
      } else {
        console.log(error);
      }
    };
  }
}

module.exports = {
  BadRequestError,
  errorHandler: new ErrorHander()
};
