import { useRef } from "react";

export const Counter = ({ setCount, count }) => {
  const ref = useRef(0);
  const inputRef = useRef(null);

  const minus = () => {
    setCount(count - 1);
    ref.current -= 1;
  };

  const plus = () => {
    setCount(count + 1);
  };

  const show = () => {
    console.log(ref.current);
    inputRef.current.focus();
  };

  return (
    <div>
      <button onClick={minus}>-</button>
      <span>{count}</span>
      <button onClick={plus}>+</button>
      <button onClick={show}>show result</button>

      <input type="text" ref={inputRef} />
    </div>
  );
};

