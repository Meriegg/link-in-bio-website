import React from "react";
import Head from "next/head";
import Particles from "./Particles";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mariodev | Biopage</title>
      </Head>
      <Particles />
      <main>{children}</main>
    </>
  );
};

export default Layout;
