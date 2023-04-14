import { useState } from "react";
import validation from "../validation/validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSumit = (event) => {
    event.preventDefault(login(userData));
  };

  return (
    <form>
      <label htmlFor="Email">Email:</label>
      <input
        name="email"
        type="email"
        value={userData.email}
        onChange={handleChange}
      ></input>
      {errors.email && <p>{errors.email}</p>}
      <label htmlFor="Password"> Password: </label>
      <input
        name="password"
        type="password"
        value={userData.password}
        onChange={handleChange}
      ></input>
      {errors.password && <p>{errors.password}</p>}
      <button onClick={handleSumit}>Submit </button>
    </form>
  );
};

export default Form;
