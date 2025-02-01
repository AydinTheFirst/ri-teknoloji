import React from "react";

import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="flex min-h-dvh flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </>
  );
}
