import React from "react";
import { Login } from "../../Services/Access";
import { useHistory } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ButtonLogin, LoginFormContainer, TexfieldLogin } from "./styled";

const LoginForm = () => {
  const { form, handleInputOnChange } = useForm({ email: "", password: "" });
  const history = useHistory();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    Login(form, history);
  };

  return (
    <LoginFormContainer>
      <form onSubmit={onSubmitLogin}>
        <TexfieldLogin>
          <TextField
            name={"email"}
            value={form.email}
            onChange={handleInputOnChange}
            label={"E-mail"}
            placeholder="email@email.com"
            type={"email"}
            variant={"outlined"}
            fullWidth
            margin={"outlined"}
            required
          />
        </TexfieldLogin>
        <TexfieldLogin>
          <TextField
            name={"password"}
            value={form.password}
            onChange={handleInputOnChange}
            label={"Password"}
            placeholder={"Min 6 digits"}
            type={"password"}
            variant={"outlined"}
            fullWidth
            margin={"outlined"}
            required
          />
        </TexfieldLogin>
        <ButtonLogin>
          <Button fullWidth variant="contained" type="submit" color="primary">
            <p>Sign In</p>
          </Button>
        </ButtonLogin>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;