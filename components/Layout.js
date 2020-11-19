// components/Layout.js
import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";

import "./scss/layout.scss";
import "./scss/index.scss";
import "./scss/explore.scss";
// import "./scss/_Contact.scss"


import navButtons from "../config/buttons";

const Layout = props => {
  const appTitle = `> NaKoniu`;

  return (
    <div className="Layout">
      <Head>
        <title>NaKoniu</title>
      </Head>

      <Header appTitle={appTitle} />
      <div className="Content">{props.children}</div>
      <NavBar navButtons={navButtons} />
    </div>
  );
};

export default Layout;
