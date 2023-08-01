import AdminModel from "../model/user.js"

export const findUser  = async (data) =>{
    return await AdminModel.findOne({email:data})
}

export const createUser = async (data) => {
    return await AdminModel.create(data)
}