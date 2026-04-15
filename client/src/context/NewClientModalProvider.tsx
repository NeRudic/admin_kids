import { NewClientModalContext } from "./NewClientModalContext";
import { useState } from "react";
import { ChildrenInterface } from "../.types";
import { ReactNode } from "react";

export function NewClientModalProvider({
  children,
}: ChildrenInterface): ReactNode {
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
