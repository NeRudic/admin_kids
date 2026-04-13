import { createContext } from "react";

export interface ModalContextType {
  isOpen: boolean;
  newClientModalHandler: () => void;
}

export const NewClientModalContext = createContext<ModalContextType | null>(
  null,
);
