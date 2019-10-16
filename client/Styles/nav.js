import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-family: "Quicksand", sans-serif;
`;

export const Item = styled.span`
  margin-left: 30px;
  cursor: pointer;
  a {
    color: #7e7979;
    text-decoration: none;
  }
`;

export const Logo = styled.div`
  span {
    font-weight: 600;
  }
`;
