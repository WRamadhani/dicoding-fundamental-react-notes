import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";

import MessageContext from "../context/MessageContext";
import { login } from "../utils/api";

import Panel from "../components/Panel";
import Input from "../components/Input";
import Button from "../components/Button";
import Message from "../components/Message";
import PageHeading from "../components/PageHeading";
import useInput from "../hooks/useInput";

function Login({ onSuccess }) {
  const navigate = useNavigate();
  // const { formInput, onChangeHandler } = useContext(FormInputContext);
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

  async function onLogin(email, password) {
    await login({ email, password })
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
          onSuccess(response.data.accessToken);
          navigate("/");
        }
      });
  }

  function loginHandler(event) {
    event.preventDefault();
    onLogin(email, password);
  }

  return (
    <div style={{ paddingInline: "2rem" }}>
      <Panel>
        <PageHeading align="center" heading="Sign In" />
        {showMessage ? (
          <Message
            status={message.status}
            message={message.message}
            onClick={() => toggleShowMessage()}
          />
        ) : null}
        <form className="form" onSubmit={loginHandler}>
          <Input
            label={"Email"}
            name={"email"}
            type="email"
            isRequired={true}
            placeholder={"acme@example.com"}
            value={email || ""}
            error={emailError}
            onChange={onEmailChange}
          />
          <Input
            label={"Password"}
            name={"password"}
            type="password"
            isRequired={true}
            placeholder={"12345678"}
            value={password || ""}
            error={passwordError}
            onChange={onPasswordChange}
          />
          <Button
            type={"primary"}
            label={"Sign In"}
            isDisabled={emailError || passwordError ? true : false}
            isSubmit={true}
          />
        </form>
      </Panel>
    </div>
  );
}

Login.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default Login;
