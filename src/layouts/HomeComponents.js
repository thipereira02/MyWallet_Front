import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 7px auto;
`;

export const Title = styled.h1`
    font-size: 26px;
    color: #FFF;
    font-weight: bold;
`;

export const RegisterBox = styled.div`
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

export const NoRegisters = styled.div`
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

export const Registers = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-height: 90%;
    overflow: scroll;
`;

export const Event = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 8px;
`;

export const Date = styled.div`
    font-size: 16px;
    color: #C6C6C6;
`;

export const Element = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
`;

export const Description = styled.div`
    color: #000;
    font-size: 16px;
`;

export const Value = styled.div`
    color: ${props => props.type === "income" ? "#28A745" : "#DC3545"};
`;

export const Balance = styled.div`
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

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 13px auto;
`;

export const Button = styled.button`
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