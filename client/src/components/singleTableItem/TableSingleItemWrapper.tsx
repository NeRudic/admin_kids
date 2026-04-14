import Svg from "../svg/Svg";
import { ChildrenInterface } from "../../.types";

export default function TableSingleItemWrapper({
  children,
}: ChildrenInterface) {
  const { svg_eye } = Svg();
  return (
    <div className="single_table_item msh-exl">
      <div className="eye_svg">{svg_eye()}</div>
      <div className="table_content">{children}</div>
    </div>
  );
}
