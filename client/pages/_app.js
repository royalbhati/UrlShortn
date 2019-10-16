import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../lib/theme";
import Layout from "../components/Layout";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
