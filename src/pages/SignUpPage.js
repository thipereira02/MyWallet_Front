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
	// eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <Input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
					<Input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
					<Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
					<Input type="password" placeholder="Confirme a senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    {
						error && 
                        <Error>
                            {error}
                        </Error>
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