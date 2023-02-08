import styled from "@emotion/styled";

export const Btn = styled.div`
  button {
    border: none;
    border-radius: 5px;
    padding: 15px 0;
    width: 150px;
    color: white;
    font-size: 20px;
    cursor: pointer;
    &:focus,
    &:hover {
      opacity: 0.6;
      letter-spacing: 0.1rem;
    }
  }
`;
export const BtnStart = styled.button`
  background-color: green;
`;
export const BtnPause = styled.button`
  background-color: red;
  margin: 0 20px;
`;
export const BtnReset = styled.button`
  background-color: orange;
`;
export const BtnContinue = styled.button`
  background-color: purple;
`;
