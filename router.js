import express from "express";
import {userLogin} from "./controller/user.js";
import { handleError } from "./middlewares/error.js";
import { userRegister } from "./controller/user.js";

const routes = express.Router()


routes.route('/login').post(handleError(userLogin))
routes.route('/register').post(handleError(userRegister))
routes.route('/getCompaniesData').get(handleError(getCompanies))


export default routes