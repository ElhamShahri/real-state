import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="min-h-[700px] ">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
