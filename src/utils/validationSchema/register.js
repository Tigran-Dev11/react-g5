import * as yup from "yup";

export const registerValidation = yup
  .object({
    firstName: yup.string().min(3).max(25),
    lastName: yup.string().min(3).max(25),
    email: yup.string().required("email բաժինը դատարկ է").email(),
    password: yup.string().required("password բաժինը դատարկ է").min(8).max(100),
    confirmPassword: yup
      .string()
      .required("confirm-password բաժինը դատարկ է")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();
