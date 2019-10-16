import styled from "styled-components";

export const Input = styled.div`
  input {
    color: #a79f9f;
    padding: 10px;
    border-radius: 38px;
    border: unset;
    background: white;
    border: 1px solid #bfb0b0;
    font-weight: 600;
    font-family: "Quicksand";
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #e8e4e4;
      font-size: 10px;
      opacity: 1; /* Firefox */
    }
  }
`;
