import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import dayjs from "dayjs";
import { IoExitOutline } from "react-icons/io5";
import { BsDashCircle, BsPlusCircle } from "react-icons/bs";

import { Header, Title, RegisterBox, NoRegisters, Registers, Event, Date, Element, Description, Value, Balance, Buttons, Button } from "../layouts/HomeComponents";
import UserContext from "../contexts/UserContext";
import { getUserFinances } from "../services/requests";

export default function Home() {
    const history = useHistory();
    const { userData } = useContext(UserContext);
    const [financesList, setFinancesList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const req = getUserFinances(userData.token);
        req.then(res => {
            setFinancesList(res.data);
            setLoading(false);
            calculateTotal(res.data);
        });
        req.catch(() => {
            alert("Ocorreu um erro ao tentar carregar a lista. Tente novamente")
            history.push("/")
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

	function goTo(path){
		history.push({
            pathname: "/finances",
            state: {text: path}
        })
    };

    function calculateTotal(finance){
		let sum = 0;
    
		finance.forEach(f => {
			if (f.eventType === "income"){
				sum += Number(f.value);
			} else{
				sum -= Number(f.value);
			}
		});
		setTotal(sum);
	}

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
                                        {f.value.replace(".",",")}
                                    </Value>
								</Element>
							</Event>
						))}
					</Registers>
					<Balance positive={total >= 0}>
						<h1>SALDO</h1>
						<p>{total.toString().replace(".",",")}</p>
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