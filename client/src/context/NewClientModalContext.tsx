import { createContext, useContext } from "react";

export interface ModalContextType {
  isOpen: boolean;
  newClientModalHandler: () => void;
}

export const NewClientModalContext = createContext<ModalContextType | null>(
  null,
);

export const useNewClientModal = () => {
  const context = useContext(NewClientModalContext);

  if (!context) {
    throw new Error(
      "useNewClientModal must be used within a NewClientModalProvider",
    );
  }

  return context;
};
