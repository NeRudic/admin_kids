import Svg from "../../svg/Svg";
import { moreHandler } from "./setMoreHandler";
import { ReactNode } from "react";
import "./TableSingleItem.css";

interface ISTI {
  mainContent: ReactNode;
  moreContent: ReactNode;
}

export default function TableSingleItem({ mainContent, moreContent }: ISTI) {
  const { svg_eye } = Svg();

  const { setMoreHandler, more } = moreHandler();

  return (
    <>
      <div className="single_table_item msh-exl" onClick={setMoreHandler}>
        <div className="eye_svg">{svg_eye()}</div>
        <div className="table_content">{mainContent}</div>
      </div>
      <div className={`sti_more ${more ? "visible" : "hidden"}`}>
        {moreContent}
      </div>
    </>
  );
}
