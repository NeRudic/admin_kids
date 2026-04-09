class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }

  static success(message) {
    return new ApiError(201, message);
  }

  static badRequest(message) {
    return new ApiError(400, message);
  }

  static forbidden(message) {
    return new ApiError(403, message);
  }

  static internal(message) {
    return new ApiError(500, message);
  }
}

export default ApiError;
