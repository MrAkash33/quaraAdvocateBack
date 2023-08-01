import { model } from "mongoose";
import { Schema } from "../config/mongoConfig.js";
const AdminSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    role: { 
        type: String
    },
    email: { 
        type: String,
        require: true
    },
    password: String,
    access_level: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true    
}
);

const AdminModel = model('user', AdminSchema, "user");

export default AdminModel