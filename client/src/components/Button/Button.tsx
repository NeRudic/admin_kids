import { ReactNode } from "react";
import "./Button.css";

interface IButton {
  children?: ReactNode;
  onClick?: () => void;
  classes?: string;
}

export default function Button({ children, onClick, classes }: IButton) {
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
