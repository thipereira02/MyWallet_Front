import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";

import UserContext from "../contexts/UserContext";
import { getUserFinances } from "../services/requests";

export default function Home() {
    const history = useHistory();
    const { userData } = useContext(UserContext);
    const [financesList, setFinancesList] = useState([]);

    useEffect(() => {
        const req = getUserFinances(userData.token);
        req.then(res => {
            setFinancesList(res.data)
        });
        req.catch(() => {
            alert("Ocorreu um erro ao tentar carregar a lista. Tente novamente")
            history.push("/")
        })
    });

    return (
        <>
            <Header>
                <Title>
                    Olá, {userData.name}
                </Title>
                <IoExitOutline size="32" color="#FFF"/>
            </Header>
            <RegisterBox>
                drfhdh
            </RegisterBox>
            <Buttons>
                <Button>
                    <BsPlusCircle size="20" color="#FFF"/>
					<p>Nova<br/>entrada</p>
                </Button>
                <Button>
                    <BsDashCircle size="20" color="#FFF"/>
					<p>Nova<br/>saída</p>
                </Button>
            </Buttons>
        </>
    );
}

const Header = styled.div`
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

const RegisterBox = styled.div`
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 13px auto;
`;

const Button = styled.button`
    width: 48%;
    background: #A328D6;
    border-radius: 5px;
    height: 114px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 10px;
    padding-left: 10px;
    p{
        color: #FFF;
        font-size: 17px;
        font-weight: bold;
        text-align: start;
    }
`;