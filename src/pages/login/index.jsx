import { useRef } from "react";

const Login = () => {
  const ref = useRef();

  const numberRef = useRef(0);

  const focusInput = () => {
    ref.current.focus();
  };

  let text = "text";

  const increment = () => {
    console.log("call increment");

    numberRef.current = numberRef.current + 1;
  };

  const showResult = () => {
    console.log(numberRef.current);
  };

  return (
    <div>
      <input type="text" ref={ref} />
      <button className="click-me" onClick={focusInput}>
        click me
      </button>

      <p>{text}</p>
      <button onClick={increment}>increment number</button>
      <br />
      {numberRef.current}

      <button onClick={showResult}>show result</button>
    </div>
  );
};

export default Login;
