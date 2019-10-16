import styled from "styled-components";

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  align-items: center;

  span {
    font-family: "satisfy";
    font-size: 80px;
    color: #c1b8ad;
  }
  div {
    margin-top: 20px;
    font-family: "Quicksand";
    font-size: 20px;
    font-weight: 700;
    color: #615d5d;
  }

  button {
    color: #2b2727;
    margin-top: 50px;
    width: 50%;
    text-align: center;
    height: 42px;
    border-radius: 38px;
    border: unset;
    background: white;
    border: 1px solid #bfb0b0;
    cursor: pointer;
    font-weight: 600;
    font-family: "Quicksand";
  }
`;
