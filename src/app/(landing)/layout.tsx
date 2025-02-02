import React from "react";

import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="container grid flex-1 gap-10">{children}</main>
      </div>
      <Footer />
    </>
  );
}
