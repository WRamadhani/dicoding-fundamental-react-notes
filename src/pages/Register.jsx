import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import MessageContext from "../context/MessageContext";
import { register } from "../utils/api";

import Input from "../components/Input";
import Button from "../components/Button";
import Message from "../components/Message";

function Register() {
  const [formInput, setFormInput] = useState({});
  const navigate = useNavigate();
  const { message, setDisplayMessage, showMessage, toggleShowMessage } =
    useContext(MessageContext);

  async function onRegister(user) {
    await register(user)
      .then((response) => {
        console.log(response);
        setDisplayMessage({
          status: response.status,
          message: response.message,
        });
        toggleShowMessage();
        return response;
      })
      .then((response) => {
        if (response.status === "success") {
          navigate("/");
        }
      });
  }

  function onChangeHandler(event) {
    setFormInput((prevFormInput) => {
      return {
        ...prevFormInput,
        [event.target.name]: event.target.value,
      };
    });
  }

  function registerHandler(event) {
    event.preventDefault();
    onRegister(formInput);
  }

  return (
    <>
      {showMessage ? (
        <Message
          status={message.status}
          message={message.message}
          onClick={() => toggleShowMessage()}
        />
      ) : null}
      <form onSubmit={registerHandler}>
        <Input
          name={"name"}
          placeholder={"nama"}
          value={formInput.name}
          isRequired={true}
          onChange={(event) => onChangeHandler(event)}
        />
        <Input
          type={"email"}
          name={"email"}
          placeholder={"email"}
          value={formInput.email}
          isRequired={true}
          onChange={(event) => onChangeHandler(event)}
        />
        <Input
          type={"password"}
          name={"password"}
          placeholder={"password"}
          value={formInput.password}
          isRequired={true}
          onChange={(event) => onChangeHandler(event)}
        />
        <Button label={"Sign Up"} isButton={false} />
      </form>
    </>
  );
}

export default Register;
