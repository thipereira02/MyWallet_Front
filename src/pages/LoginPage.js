import { useState } from "react";

import MainStyle from "../layouts/MainStyle";
import { Box, Input, Button, StyledLink } from "../layouts/common/Components";

export default function LoginPage(){
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");  

    return (
        <MainStyle>
            <Box>
				<form>
					<Input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
					<Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
					<Button type="submit">
                        Entrar
					</Button>
				</form>
				<StyledLink to="/signup">Primeira vez? Cadastre-se!</StyledLink>
			</Box>
        </MainStyle>
    );
}