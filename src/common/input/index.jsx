export const Input = ({ type, placeholder, error, register }) => {
  return;
  <div className="inputWrapper">
    <input
      type={type}
      placeholder={placeholder}
      register={register}
    />
    {error ? <span>{error}</span> : null}
  </div>;
};
