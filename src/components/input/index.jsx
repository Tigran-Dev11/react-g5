import s from "./input.module.scss";

export const Input = ({ type, placeholder, error, register, ...rest }) => {
  return (
    <div className={s.inputWrapper}>
      <input
        className={error ? s.error : s.input}
        type={type}
        placeholder={placeholder}
        {...register}
        {...rest}
      />
      {error ? <span>{error}</span> : null}
    </div>
  );
};