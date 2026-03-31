import { NewClientModalContext } from "./NewClientModalContext";
import { useState } from "react";

export function NewClientModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const newClientModalHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <NewClientModalContext value={{ isOpen, newClientModalHandler }}>
      {children}
    </NewClientModalContext>
  );
}
