import Button from "../../common/button";

const Counter = ({ number, setNumber }) => {
  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  console.log("render");

  return (
    <div>
      <Button text="increment" click={increment} /> <br />
      <Button text="decrement" click={decrement} />
      <Button
        text="hello"
        click={() => {
          alert("Hello World!");
        }}
      />
    </div>
  );
};

export default Counter;
