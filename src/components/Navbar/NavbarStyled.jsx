import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
    /* position: fixed;
    top: 0; */
    background-color: #fff;
    z-index: 1;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

export const ImageLogo = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
    cursor: pointer;
    border-radius: 30%;
`;

export const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;

    button {
        position: absolute;
        top: 1;
        right: 0.2rem;
        z-index: 10;
        border: none;
        background-color: #f5f5f5;
        color: #757575;
        border-radius: 0.3rem;
        padding: 0.5rem;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover{
        background-color: #757575;
        color: #f5f5f5
    }

    input {
        outline: none;
        font-size: 1rem;
        padding: 0.6rem;
        background-color: #f5f5f5;
        border: none;
        width: 100%;
        border-radius: 0.3rem;

        &:focus{
            border: 1px solid #2eb451;
        }
    }
`;

// export const ErrorSpan = styled.span`
//   color: #ff3333;
//   padding: 0.5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1rem;
//   border-radius: 5px;
//   margin-top: 0.5rem;
// `;

export const ErrorSpan = styled.span`
  color: #ff3333;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const UserLoggedSpace = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    gap: 1rem;

    h2 {
        font-size: 1.1rem;
        color: #2eb451;
        transition: all 0.3s;
        cursor: pointer;
    }

    i {
        font-size: 1.5rem;
        color: #2eb451;
        cursor: pointer;
    }

    i:hover {
        color: #26793c;
    }
`;