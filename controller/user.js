import { API_FAILURE_MESSAGE, HTTP_CONSTANTS } from "../constants.js"

import { response } from "../helper/index.js"
import { loginUser, registerUser } from "../services/user.js"

export const userLogin = async (req,res) => {
    if(!req.body.email || !req.body.password)
        throw { message: API_FAILURE_MESSAGE.INVALID_REQUEST }
    const responseData = await loginUser(req.body)
    return response(res, responseData, HTTP_CONSTANTS.RESPONSE_STATUS.SUCCESS)
}

export const userRegister = async (req,res) => {
    if(!req.body.email || !req.body.password)
        throw {message:API_FAILURE_MESSAGE.INVALID_REQUEST}
        const responseData  = await registerUser(req.body)
        return response(res,responseData,HTTP_CONSTANTS.RESPONSE_STATUS.SUCCESS)
}

