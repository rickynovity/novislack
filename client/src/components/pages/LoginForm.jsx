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

const LoginForm = () => {
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
  };

  return (
    <NoviSlackLayout>
      <Header />
      <LoginTitle />
      <SigninLayout>
        <ButtonGroup>
          <Button iconName="google" text="Se connecter avec Google" />
          <Button iconName="github" text="Se connecter avec Github" />
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
