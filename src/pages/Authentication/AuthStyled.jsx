import styled from "styled-components";

export const AuthContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: 0 auto;

    form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    border-radius: 0.5rem;
    height: 400px;
    padding: 2rem;
    background-color: ${(props) => (props.type === "signin" ? "#2eb451" : "#FFF")};
    color: ${(props) => (props.type === "signup" ? "#ffa400" : "#FFF")};
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

    h2 {
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }
`