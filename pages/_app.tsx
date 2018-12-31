import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
import { Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import css from "@app/lib/reset";
import theme from "@app/lib/theme";

export default class MyApp extends App {
  render() {
    // @ts-ignore
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>analogic.al</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#000000" />
        </Head>

        <Global styles={css} />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
