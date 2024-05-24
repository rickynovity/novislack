import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Divider,
  Footer,
  Header,
  LoginInput,
  LoginTitle,
  NoviSlackLayout,
  SigninLayout,
} from "../ui";
import { login } from "../../lib/auth";
import { toast } from "sonner";

const LoginForm = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    console.log("USER_INFO : ", loginData);
    const { username, password } = loginData;
    const user = await login(username, password);
    if (user) {
      onLogin(user);
    } else {
      setError(true);
    }
  };

  const handleClick = () => toast.info("Coming soon ...");

  return (
    <NoviSlackLayout>
      <Header />
      <LoginTitle />
      <SigninLayout>
        <ButtonGroup>
          <Button
            iconName="google"
            text="Se connecter avec Google"
            onClick={handleClick}
          />
          <Button
            iconName="github"
            text="Se connecter avec Github"
            onClick={handleClick}
          />
        </ButtonGroup>
        <Divider text="OU" />
        <form onSubmit={handleSubmit} className="space-y-5">
          <LoginInput
            value={loginData.username}
            type="text"
            id="username"
            name="username"
            placeholder="madava"
            onChange={handleChange}
          />
          <LoginInput
            value={loginData.password}
            type="password"
            id="password"
            name="password"
            placeholder="mot de passe"
            onChange={handleChange}
          />
          {error && (
            <div className="text-red-500 text-sm p-2">Login failed</div>
          )}
          <Button
            type="submit"
            text="Se connecter avec un pseudo"
            background="bg-gradient-to-bl from-emerald-500 via-cyan-700 to-blue-500"
          />
        </form>
      </SigninLayout>
      <Footer />
    </NoviSlackLayout>
  );
};

export default LoginForm;
