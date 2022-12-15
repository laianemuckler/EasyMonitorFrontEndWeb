import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "./../../assets/logo.png"


const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container>
         <span>
            <img src={logo} alt="easy monitor logo"></img>
        </span>
      <C.Label>Criar conta</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Nome do usuário"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
          <Input
          type="password"
          placeholder="Repita a senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
          <Input
          type="text"
          placeholder="Curso"

        />
        <C.labelError>{error}</C.labelError>
        <div>
            <input type="radio" id="aluno" name="aluno"></input>
            <label for="Aluno">Aluno</label>
        </div>
        <div>
            <input type="radio" id="Monitor" name="monitor" ></input>
            <label for="Monitor">Monitor</label>
        </div>
        <Button Text="Inscrever-se" onClick={handleSignup} />
      </C.Content>
    </C.Container>
  );
};

export default Signup;