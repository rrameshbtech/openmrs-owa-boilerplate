import React, { Fragment } from "react";

import { Header } from "./common/header.jsx";

import "./app.scss";

const AppComponent = () => {
  return (
    <Fragment>
      <Header />
      <h1>Welcome to OpenMRS React Web Application!</h1>
    </Fragment>
  );
};

export default AppComponent;
