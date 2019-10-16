import React from "react";
import Nav from "../components/Nav";
import Head from "next/head";
import { Wrapper, Content } from "../Styles/layout";
import { StateProvider } from "../store";
const initialState = {
  nav: "intro"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change_nav":
      return {
        ...state,
        nav: action.nav
      };
    default:
      return state;
  }
};
export default function Layout(props) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Wrapper>
        <Head></Head>
        <Nav></Nav>
        <Content>{props.children}</Content>
      </Wrapper>
    </StateProvider>
  );
}
