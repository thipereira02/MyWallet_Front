import React from "react";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

import MainStyle from "../layouts/MainStyle";
import { Box, Input, Button, StyledLink, Error } from "../layouts/common/Components";
import { registration } from "../services/requests";
import UserContext from "../contexts/UserContext";

export default function SignUpPage(){
	const history = useHistory();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const { setUserData } = useContext(UserContext);
	const user = localStorage.getItem("user");

	useEffect(() => {
		user ? history.push("/home") : setUserData(null);
	},[]);

	function signup(e){
		e.preventDefault();
		setLoading(true);

		const body = {name, email, password, confirmPassword};

		const req = registration(body);
		req.then(() => {
			alert("Cadastro realizado com sucesso!");
			history.push("/");
		});
		req.catch(() => {
			setError("Dados inválidos. Tente novamente.");
			setLoading(false);
		});
	}

	return (
		<MainStyle>
			<Box>
				<form onSubmit={signup}>
					<Input 
						type="text" 
						placeholder="Nome" 
						value={name} 
						onChange={e => setName(e.target.value)}
						onInvalid={e => e.target.setCustomValidity("Você deve inserir um nome aqui")} 
						onInput={e => e.target.setCustomValidity("")}
						required
					/>
					<Input 
						type="email" 
						placeholder="E-mail" 
						value={email} 
						onChange={e => setEmail(e.target.value)}
						onInvalid={e => e.target.setCustomValidity("Você deve inserir um email válido aqui")} 
						onInput={e => e.target.setCustomValidity("")}
						required 
					/>
					<Input 
						type="password" 
						placeholder="Senha" 
						value={password} 
						onChange={e => setPassword(e.target.value)}
						onInvalid={e => e.target.setCustomValidity("Insira uma senha com no mínimo 6 caracteres")} 
						onInput={e => e.target.setCustomValidity("")}
						required 
					/>
					<Input 
						type="password" 
						placeholder="Confirme a senha" 
						value={confirmPassword} 
						onChange={e => setConfirmPassword(e.target.value)}
						onInvalid={e => e.target.setCustomValidity("As senhas devem ser iguais")} 
						onInput={e => e.target.setCustomValidity("")}
						required
					/>
					{
						error && 
                        <Error>{error}</Error>
					}
					<Button type="submit" disabled={loading}>
                        Cadastrar
					</Button>
				</form>
				<StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
			</Box>
		</MainStyle>
	);
}