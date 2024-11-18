import * as yup from "yup";

export const loginValidation = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(100),
  })
  .required();

  