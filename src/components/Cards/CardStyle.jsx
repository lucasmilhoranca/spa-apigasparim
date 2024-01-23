import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    border-radius: 0.3rem;
    background-color: #ffff;
    padding: 2rem;
`;

export const CardBody = styled.article`
    display: flex;
    align-items: center; 
    justify-content: center;
    gap: 1rem;
    
    h2 {
        margin-bottom: 1rem;
    }
    
`;

export const StatusContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`;

export const GreenCircle = styled(Circle)`
  background-color: #2eb451;
`;

export const RedCircle = styled(Circle)`
  background-color: #ffa400;
`;