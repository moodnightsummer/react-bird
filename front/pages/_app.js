import React from "react";
import "antd/dist/antd";
import PropType from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";

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

export default wrapper.withRedux(App);
