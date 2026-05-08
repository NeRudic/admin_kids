import TableHeader from "../components/Table/TableHeader/TableHeader";
import TableBackground from "../components/Table/TableBackground/TableBackground";
import { useEffect, useState } from "react";
import { IGrouppedFamily } from "../.types";
import { findFamilies } from "../services/api/findFamilies";
import TableSingleItem from "../components/Table/TableSingleItem/TableSingleItem";
import "./Families.css";

export default function Families() {
  const [inputValue, setInputValue] = useState("");
  const [renderData, setRenderData] = useState<IGrouppedFamily[]>([]);

  const dataNotifier = async (inputValue: string) => {
    const preparedData = await findFamilies(inputValue);
    preparedData
      ? setRenderData(preparedData)
      : console.log("Error: preparedData is undefined");
  };

  useEffect(() => {
    dataNotifier("");
  }, []);

  function render(data: IGrouppedFamily[]) {
    return data.map((family) => {
      return (
        <TableSingleItem
          mainContent={family.family_name}
          moreContent={[
            ...family.adults.map((adult) => {
              return (
                <div className="adult tsi_item" key={`adult-${adult.id}`}>
                  <div className="role text-left">{`${adult.role}:`}</div>
                  <div className="name text-left">{adult.first_name}</div>
                  {adult.phone_number && (
                    <div className="phone_number text-right">
                      {adult.phone_number}
                    </div>
                  )}
                </div>
              );
            }),
            ...family.children.map((child) => {
              return (
                <div className="child tsi_item" key={`child-${child.id}`}>
                  <div className="role text-left">{`${child.role}:`}</div>
                  <div className="name text-left">{child.first_name}</div>
                  {child.birthday && (
                    <div className="child_birthday text-center">
                      {child.birthday}
                    </div>
                  )}
                </div>
              );
            }),
          ]}
          key={`family-${family.family_id}`}
        ></TableSingleItem>
      );
    });
  }

  const state = { inputValue: inputValue, setInputValue: setInputValue };
  return (
    <>
      <TableHeader
        placeholder="Введiть сiм'ю"
        state={state}
        dataNotifier={dataNotifier}
        button_label="Знайти"
      >
        <h5>Сім'я</h5>
        <h5>Останнiй вiзит</h5>
      </TableHeader>
      {renderData.length !== 0 && (
        <div className="families_content">
          <TableBackground>
            {renderData.length !== 0 && render(renderData)}
          </TableBackground>
        </div>
      )}
    </>
  );
}
