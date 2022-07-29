import React from "react";
import { CrabsProvider } from "contexts/crabs.context";

const ProviderWrapper = ({ children }: { children?: React.ReactNode }) => {
  return <CrabsProvider>{children}</CrabsProvider>;
};

export default ProviderWrapper;
