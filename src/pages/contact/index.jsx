import { useState } from "react";

const Contact = () => {
  const [number, setNumber] = useState(0);

  const plus = () => {
    setNumber(number + 1);
  };

  const minus = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>value = {number}</h1>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
    </div>
  );
};

export default Contact;
