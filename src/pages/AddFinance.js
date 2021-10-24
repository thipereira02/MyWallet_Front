import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

import { Box, Input, Button, StyledLink, Error } from "../layouts/common/Components";
import { addNewFinance } from "../services/requests";

export default function AddFinance() {
    const history = useHistory();
    const location = useLocation();
    const { userData } = useContext(UserContext);
    const finance = location.state.text;
    const [value, setValue] = useState();
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function newFinance(e) {
        e.preventDefault();
        setLoading(true);

        const body = {value, description, eventType: finance};
        const token = userData.token;

        const req = addNewFinance(body, token);
        req.then(() => history.push("/home"));
        req.catch(() => {
            setError("Não foi possível cadastrar. Tente novamente")
            setLoading(false);
        });
    }

    return (
        <>
			<Title>
                {finance==="income" ? "Nova entrada" : "Nova saída"}
			</Title>
			<Container>
				<Box>
					<form onSubmit={newFinance}>
						<Input type="number" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)} />
						<Input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
						{
							error && 
                            <Error>
                                { error }
                            </Error>
						}
                        <Button type="submit" disabled={loading} backgroundColor="#A328D6">
                            {finance==="income" ? "Salvar entrada" : "Salvar saída"}
						</Button>
						<StyledLink to="/home">Voltar</StyledLink>
					</form>
				</Box>
			</Container>
		</>
    );
}

const Container = styled.div`
  margin: 10vw auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
    font-size: 26px;
    font-weight: bold;
    color: #FFF;
    width: 90%;
    margin: 25px auto 40px auto;
`;