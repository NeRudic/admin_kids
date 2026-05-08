import Svg from "../../svg/Svg";
import { moreHandler } from "./setMoreHandler";
import { ReactNode } from "react";
import "./TableSingleItem.css";
import Button from "../../Button/Button";

interface ISTI {
  mainContent: ReactNode;
  moreContent: ReactNode;
}

export default function TableSingleItem({ mainContent, moreContent }: ISTI) {
  const { svg_eye } = Svg();

  const { setMoreHandler, more } = moreHandler();

  return (
    <>
      <div className="tsi_wrapper">
        <div
          className={`table_single_item msh-bd ${more ? "tsi_active" : ""}`}
          onClick={setMoreHandler}
        >
          <div className="eye_svg">{svg_eye()}</div>
          <div className="table_content">{mainContent}</div>
        </div>
        <div className={`tsi_more msh-bd ${more ? "visible" : "hidden"}`}>
          <div className="tsi_more_wrapper">
            {moreContent}
            {more && (
              <div className="tsi_more_buttons_wrapper">
                <Button classes="tsi_more_button edit mt-db">Редагувати</Button>
                <Button classes="tsi_more_button delete mt-db">Видалити</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
