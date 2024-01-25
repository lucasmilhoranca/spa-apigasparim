import styled from "styled-components";

export const CadBody = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: #FFF;
    width: 100%;
    height: 90%;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

`;

export const CadContainer = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;

    form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
    }
`;