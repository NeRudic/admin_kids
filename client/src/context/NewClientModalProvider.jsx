import { NewClientModalContext } from "./NewClientModalContext";
import { useState } from "react";

export function NewClientModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <NewClientModalContext value={{ isOpen, modalHandler }}>
      {children}
    </NewClientModalContext>
  );
}
