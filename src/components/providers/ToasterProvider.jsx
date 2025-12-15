import React from "react";
import { Toaster } from "sonner";

const ToasterProvider = ({
  children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default ToasterProvider;
