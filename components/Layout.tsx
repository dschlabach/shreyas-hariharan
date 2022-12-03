import React from "react";
import Header from "components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-sans min-h-screen text-light py-10 px-24">
      <div className="max-w-5xl mx-auto grid gap-y-24">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
