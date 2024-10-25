import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../utils/validationSchema";
import {RegisterForm} from "../../components/registerForm"
import "./style.css";

export const Register = () => {

  return (
    <RegisterForm/>
  );
};

