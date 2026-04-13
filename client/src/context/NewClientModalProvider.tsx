import { NewClientModalContext } from "./NewClientModalContext";
import { useState, ReactNode } from "react";

interface ChildrenInterface {
  children: ReactNode;
}

export function NewClientModalProvider({ children }: ChildrenInterface) {
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
