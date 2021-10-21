import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

import { Box, Input, Button, StyledLink } from "../layouts/common/Components";

export default function AddFinance() {
    const location = useLocation();
    const finance = location.state.text;
    const [value, setValue] = useState();
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false);

    return (
        <>
			<Title>
                {finance==="income" ? "Nova entrada" : "Nova saída"}
			</Title>
			<Container>
				<Box>
					<form>
						<Input type="number" placeholder="Valor (em centavos)" value={value} onChange={e => setValue(e.target.value)} />
						<Input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
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