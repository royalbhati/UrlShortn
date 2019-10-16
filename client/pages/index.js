import { withApollo } from "../lib/apollo";
import styled from "styled-components";
import Intro from "../components/Intro";

// import Content from "../components/Content";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
const IndexPage = props => (
  <div>
    <Intro></Intro>
    {/* <Content></Content> */}
  </div>
);

export default withApollo(IndexPage);
