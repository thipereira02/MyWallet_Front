import React from "react";
import styled from "styled-components";

export default function Error() {
	return (
		<Container>Ops! A página que você está procurando não foi encontrada.</Container>
	);
}

const Container = styled.div`
  margin: 50% auto;
  width: 75%;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 30px;
  color: #FFF;
`;