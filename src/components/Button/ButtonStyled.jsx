import styled from "styled-components";

export const ButtonSpace = styled.button`
    background-color: ${(props) => props.cor};
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    color: #fff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, Arial;
    /* width: 40%; */
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    &:hover{
        background-color: ${(props) => props.cor === "#2eb451" ? "#27a744" : "#ff9a00"};
    }
`;

export const ButtonCa = styled.button`
    background-color: #2eb451;
    border: none;
    outline: none;
    width: 180px;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    color: #fff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, Arial;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    &:hover{
        background-color: #27a744;
    }
`;

export const ButtonChe = styled.button`
    background-color: #ffa400;
    border: none;
    outline: none;
    width: 180px;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    color: #fff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, Arial;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    &:hover{
        background-color: #ff9a00;
    }
`;


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`