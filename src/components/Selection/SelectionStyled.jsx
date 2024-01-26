import styled from "styled-components";

export const StyledSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border: 1px solid #2eb451;
  }
`;