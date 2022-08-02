import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <main className="min-h-screen pt-72 sm:pt-0 flex flex-1 flex-col justify-center items-center text-white">
    {children}
  </main>
);
