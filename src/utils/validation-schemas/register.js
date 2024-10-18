import * as yup from "yup";



export const registerSchema = yup.object({
    firstName: yup.string().required().min(3).max(10),
    lastName: yup.string().required().min(3).max(20),
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(15),
    confirmPassword: yup.string().required().oneOf([yup.ref("password"), null, "Passwords must match"])
}).required();


export const loginSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(15)
}).required();