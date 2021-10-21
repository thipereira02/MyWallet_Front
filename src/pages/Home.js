import { useContext } from "react";
import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";

import UserContext from "../contexts/UserContext";

export default function Home() {
    const { userData } = useContext(UserContext);

    return (
        <Box>
            <Title>
                Olá, {userData.name}
            </Title>
            <IoExitOutline size="32" color="#FFF"/>
        </Box>
    );
}

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 7px auto;
`;

const Title = styled.h1`
    font-size: 26px;
    color: #FFF;
    font-weight: bold;
`;