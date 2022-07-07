import React from "react";
import Particles from "./Particles";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Particles />
      <main>{children}</main>
    </>
  );
};

export default Layout;
