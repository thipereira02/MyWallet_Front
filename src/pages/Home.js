import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import dayjs from "dayjs";
import { IoExitOutline } from "react-icons/io5";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";

import UserContext from "../contexts/UserContext";
import { getUserFinances } from "../services/requests";

export default function Home() {
    const history = useHistory();
    const { userData } = useContext(UserContext);
    const [financesList, setFinancesList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const req = getUserFinances(userData.token);
        req.then(res => {
            setFinancesList(res.data);
            setLoading(true);
        });
        req.catch(() => {
            alert("Ocorreu um erro ao tentar carregar a lista. Tente novamente")
            history.push("/")
        })
    },[]);

	function goTo(path){
		history.push({
            pathname: "/finances",
            state: {text: path}
        })
    };

    return (
        <>
            <Header>
                <Title>
                    Olá, {userData.name}
                </Title>
                <IoExitOutline size="32" color="#FFF"/>
            </Header>
            {(loading || financesList.length !== 0) ?
                <RegisterBox>
					<Registers>
						{financesList.map((f, i) => (
							<Event key={i}>
								<Date>{dayjs(f.date).format("DD/MM")}</Date>
								<Element>
									<Description>
                                        {f.description}
                                    </Description>
									<Value type={f.eventType}>
                                        {f.value}
                                    </Value>
								</Element>
							</Event>
						))}
					</Registers>
					<Balance>
						<h1>SALDO</h1>
						<p></p>
					</Balance>
				</RegisterBox>
				:
				<NoRegisters>
					<p>Não há registros de <br/>entrada ou saída</p>
				</NoRegisters> 
            }
            <Buttons>
                <Button onClick={() => goTo("income")}>
                    <BsPlusCircle size="20" color="#FFF"/>
					<p>Nova<br/>entrada</p>
                </Button>
                <Button onClick={() => goTo("expense")}>
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

const NoRegisters = styled.div`
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        text-align: center;
        color: #868686;
        font-size: 20px;
    }
`;

const Registers = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-height: 90%;
    overflow: scroll;
`;

const Event = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 8px;
`;

const Date = styled.div`
    font-size: 16px;
    color: #C6C6C6;
`;

const Element = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
`;

const Description = styled.div`
    color: #000;
    font-size: 16px;
`;

const Value = styled.div`
    color: ${props => props.type === "income" ? "#28A745" : "#DC3545"};
`;

const Balance = styled.div`
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: 17px;
        font-weight: bold;
        color: #000;
    }
    p{
        color: ${props => props.positive ? "#28A745" : "#DC3545"};
        font-size: 16px;
    }
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