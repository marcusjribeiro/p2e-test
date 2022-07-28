import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <main className="min-h-screen mt-72 flex flex-1 flex-col justify-center items-center">
    {children}
  </main>
);
