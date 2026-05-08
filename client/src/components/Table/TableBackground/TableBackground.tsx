import { ChildrenInterface } from "../../../.types";
import "./TableBackground.css";

export default function TableBackground({ children }: ChildrenInterface) {
  return <div className="table_background">{children}</div>;
}
