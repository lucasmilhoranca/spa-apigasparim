import styled from "styled-components";

export const Foot = styled.footer`
    display: flex;
    justify-content: center;
    max-width: 100%;
    padding: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #FFF;
    z-index: 1;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

export const ButtonCad = styled.button`
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

export const ButtonCheck = styled.button`
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
    gap: 10rem;
    align-items: center;
    justify-content: center;
`;