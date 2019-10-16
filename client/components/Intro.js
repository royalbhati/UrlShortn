import Link from "next/link";
import { withRouter } from "next/router";
import Head from "next/head";
import { Intro } from "../Styles/hero";
import Content from "./Content";
import { useStateValue } from "../store";

const Header = () => {
  const [{ nav }, dispatch] = useStateValue();

  const handleClick = value => {
    dispatch({
      type: "change_nav",
      nav: "content"
    });
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
      </Head>

      <Intro>
        {nav === "intro" ? (
          <>
            <span>Cute.st</span>
            <div> probably the cutest url shortner</div>
            <button onClick={handleClick}> Prune Me :3</button>
          </>
        ) : (
          <Content></Content>
        )}
      </Intro>
    </>
  );
};

export default withRouter(Header);
