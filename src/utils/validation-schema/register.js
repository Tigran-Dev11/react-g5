import * as yup from "yup";

export const registerSchema = yup.object({
  firstName: yup.string().required('այս դաշտը պարտադիր է').min(3).max(200),
  lastName: yup.string().required().min(3).max(200),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(100),
  confirmPassword: yup.string().required().oneOf([yup.ref("password"), null], "Passwords must match"),
}).required()