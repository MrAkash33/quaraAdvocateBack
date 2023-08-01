import { API_FAILURE_MESSAGE } from "../constants.js"
import { createUser, findUser } from "../dao/user.js"
import bcrypt from 'bcrypt'
import _ from "lodash"
import jwt from 'jsonwebtoken'
import { response } from "../helper/index.js"

export const registerUser = async (data) => {
    const registeredUser = await findUser(data.email)
    console.log(registeredUser);
    if(!_.isEmpty(registeredUser))
        throw {message:API_FAILURE_MESSAGE.EMAIL_EXISTS}
        const salt = await bcrypt.genSalt(10)
        const createHashPassword = await bcrypt.hash(data.password,salt)
        data.password = createHashPassword
        const addUserResponse = await createUser(data)
}


export const loginUser = async (data) => {
    const userAvail = await findUser(data.email)
    if(_.isEmpty(userAvail))
        throw {message:API_FAILURE_MESSAGE.USER_NOT_EXIST}
    
    const isValid = await bcrypt.compare(data.password,userAvail.password)
    if(!isValid)
        throw {message:API_FAILURE_MESSAGE.WRONG_CREDENTIALS}
        
    const tokendata = {
        id:userAvail._id,
        email : userAvail.email
    }
    const signature = jwt.sign(tokendata, process.env.JWT_TOKEN_KEY, {
        algorithm: "HS256",
        expiresIn:  24 * 60 * 60
      })
      delete tokendata.id
    return {signature,tokendata}
}