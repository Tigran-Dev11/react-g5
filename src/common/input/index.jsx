import s from './input.module.scss'



export const Input = ({ type, placeholder, error, register, ...rest }) => {

  return (
    <div className={s.inputWrapper}>
        <input type={type} className={`${error ? s.error : null} ${s.singleInput}`} placeholder={placeholder}  {...register}  {...rest} />
         {error  ? <span>{error}</span> : null}
    </div>
  );
};




