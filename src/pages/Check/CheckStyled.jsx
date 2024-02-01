import styled from "styled-components";

export const CheckContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CheckHeader = styled.header`
    width: 80%;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    border-radius: 0.3rem;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    background-color: #FFF;
    z-index: 0;
`

export const CheckIconEdit = styled.i`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #2eb451;
    cursor: pointer;
    background-color: #FFF;
    padding: 0.5rem;
    transition: all 0.3 ease-in-out ;

    &:hover {
        color: #FFF;
        background-color: #2eb451;
    }
`

export const CheckBody = styled.section`
    display: flex;
    align-items: center; 
    justify-content: center;
    gap: 1rem;
    
    h2 {
        margin-bottom: 1rem;
    }
`