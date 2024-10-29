import { useEffect, useState } from "react";

const Form = ({ parse }) => {
  //   const [name, setName] = useState("");
  //   const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const { name, password } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      password,
    };

    console.log(body);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(1);
  }, []);

  useEffect(() => {
    return () => {
      console.log(1);
    };
  }, []);

  useEffect(() => {
    parse(formData);
  }, [formData]);

  return (
    <form onSubmit={onSubmit}>
      <br />
      <input type="text" onChange={onChange} value={name} name="name" />
      <br />
      <input
        type="password"
        onChange={onChange}
        value={password}
        name="password"
      />
      <br />
      <button>submit</button>
    </form>
  );
};

export default Form;
