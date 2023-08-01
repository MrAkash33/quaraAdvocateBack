export const HTTP_CONSTANTS = {

    RESPONSE_STATUS: {
      SUCCESS: "success",
      FAILURE: "fail"
    },
  
    RESPONSE_CODES: {
      UNAUTHORIZED: 401,
      SERVER_ERROR: 500,
      NOT_FOUND: 404,
      OK: 200,
      NO_CONTENT_FOUND: 204,
      BAD_REQUEST: 400,
      FORBIDDEN: 403,
      GONE: 410,
      UNSUPPORTED_MEDIA_TYPE: 415,
      TOO_MANY_REQUEST: 429
    }
  }
  
export const API_SUCCESS_MESSAGE = {
  FETCH_SUCCESS: 'Information fetched successfully',
  PREDICTION_CANCELLED:'Prediction Cancelled Succesfully',
  WINNING_DISTRIBUTED:'Winning Distributed',
  STATUS_UPDATED:'Status Updated Succesfully'
}

export const API_FAILURE_MESSAGE = {
  INVALID_PARAMS: 'Invalid Parameters',
  INVALID_REQUEST: 'Invalid Request',
  INVALID_SESSION_TOKEN: 'Invalid session token',
  INTERNAL_SERVER_ERROR: 'Internal server Error',
  BAD_REQUEST: 'Bad Request!',
  INACTIVE_MATCH: 'Please inactive the match',
  MISSING_TOKEN:'Session Token is required',
  TOKEN_EXPIRED:'Session Token expired',
  EMAIL_EXISTS:'Email already exists',
  USER_NOT_EXIST:'User does not exists',
  WRONG_CREDENTIALS:'Wrong credentials',
  RESTRICTED_ACCESS:'Restricted Access'
}

  