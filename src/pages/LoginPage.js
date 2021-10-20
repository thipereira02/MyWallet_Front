import { useState } from "react";
import { useHistory } from "react-router";

import MainStyle from "../layouts/MainStyle";
import { Box, Input, Button, StyledLink, Error } from "../layouts/common/Components";
import { login } from "../services/requests"

export default function LoginPage(){
    const history = useHistory()
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    function signIn(e){
        e.preventDefault();
        setLoading(true);

        const body = {email, password};

        const req = login(body);
        req.then(res => {
            history.push("/home");
        })
        req.catch(() => {
            setError("Email e/ou senha inválidos");
            setLoading(false);
        })
    }

    return (
        <MainStyle>
            <Box>
				<form onSubmit={signIn}>
					<Input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
					<Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
					{
						error && 
                        <Error>
                            {error}
                        </Error>
					}
                    <Button type="submit" disabled={loading}>
                        Entrar
					</Button>
				</form>
				<StyledLink to="/signup">Primeira vez? Cadastre-se!</StyledLink>
			</Box>
        </MainStyle>
    );
}