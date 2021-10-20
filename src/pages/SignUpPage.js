import { useState } from "react";
import { useHistory } from "react-router";

import MainStyle from "../layouts/MainStyle";
import { Box, Input, Button, StyledLink, Error } from "../layouts/common/Components";

export default function SignUpPage(){
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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