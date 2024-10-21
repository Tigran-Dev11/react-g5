import * as yup from "yup";

export const loginValidation = yup
  .object({
    firstName: yup.string().min(3).max(25),
    lastName: yup.string().min(3).max(25),
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(100),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    isActive: yup.boolean().required(),
  })
  .required();
