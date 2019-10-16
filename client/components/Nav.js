import React from "react";
import Link from "next/link";
import { Wrapper, Item, Logo } from "../Styles/nav";
import { useStateValue } from "../store";

export default function Nav() {
  const [{ nav }, dispatch] = useStateValue();

  return (
    <Wrapper>
      <Logo>
        <span>Cute.st</span>
      </Logo>
      <div>
        <Item>
          <span
            onClick={() => {
              dispatch({
                type: "change_nav",
                nav: "intro"
              });
            }}
          >
            home
          </span>
        </Item>
        <Item>
          <span
            onClick={() => {
              dispatch({
                type: "change_nav",
                nav: "about"
              });
            }}
          >
            about
          </span>
        </Item>
      </div>
    </Wrapper>
  );
}
