import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";

import MessageContext from "../context/MessageContext";
import { register, login } from "../utils/api";
import useInput from "../hooks/useInput";

import Input from "../components/Input";
import Button from "../components/Button";
import Message from "../components/Message";
import Panel from "../components/Panel";
import PageHeading from "../components/PageHeading";

function Register({ onSuccess }) {
  const navigate = useNavigate();
  const [nameError, name, onNameChange] = useInput("Name", "required|min:3");
  const [emailError, email, onEmailChange] = useInput(
    "Email",
    "required|email"
  );
  const [passwordError, password, onPasswordChange] = useInput(
    "Password",
    "required|min:6|max:10"
  );
  const { message, setDisplayMessage, showMessage, toggleShowMessage } =
    useContext(MessageContext);

  async function onRegister(name, email, password) {
    await register({ name, email, password })
      .then((response) => {
        setDisplayMessage({
          status: response.status,
          message: response.message,
        });
        toggleShowMessage();
        return response;
      })
      .then((response) => {
        if (response.status === "success") {
          login({ email: email, password: password }).then((response) => {
            if (response.status === "success") {
              onSuccess(response.data.accessToken);
              navigate("/");
            }
          });
        }
      });
  }

  function registerHandler(event) {
    event.preventDefault();
    onRegister(name, email, password);
  }

  return (
    <div style={{ paddingInline: "2rem" }}>
      <Panel>
        <PageHeading align="center" heading="Sign Up" />
        {showMessage ? (
          <Message
            status={message.status}
            message={message.message}
            onClick={() => toggleShowMessage()}
          />
        ) : null}
        <form className="form" onSubmit={registerHandler}>
          <Input
            name={"name"}
            placeholder={"nama"}
            value={name || ""}
            error={nameError}
            isRequired={true}
            onChange={onNameChange}
          />
          <Input
            type={"email"}
            name={"email"}
            placeholder={"email"}
            value={email || ""}
            error={emailError}
            isRequired={true}
            onChange={onEmailChange}
          />
          <Input
            type={"password"}
            name={"password"}
            placeholder={"password"}
            value={password || ""}
            error={passwordError}
            isRequired={true}
            onChange={onPasswordChange}
          />
          <Button
            type={"primary"}
            label={"Sign Up"}
            isDisabled={nameError || emailError || passwordError ? true : false}
            isSubmit={true}
          />
        </form>
      </Panel>
    </div>
  );
}

Register.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default Register;
