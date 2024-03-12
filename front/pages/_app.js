import { Component } from "react";
import React from "react";
import "antd/dist/antd";
import PropType from "prop-types";
import Head from "next/head";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>jwitter</title>
      </Head>
      <Component></Component>
    </>
  );
};

App.prototype = {
  Component: PropType.elementType.isRequired,
};

export default App;
