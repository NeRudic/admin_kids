import TableHeader from "../components/Table/TableHeader/TableHeader";
import { useEffect, useState } from "react";
import { IGrouppedFamily } from "../.types";
import { findFamilies } from "../services/api/findFamilies";
import TableSingleItem from "../components/Table/TableSingleItem/TableSingleItem";

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
                <div className="adult" key={`adult-${adult.id}`}>
                  <div className="role">{adult.role}</div>
                  <div className="name">{adult.first_name}</div>
                  {adult.phone_number && (
                    <div className="phone_number">{adult.phone_number}</div>
                  )}
                </div>
              );
            }),
            ...family.children.map((child) => {
              return (
                <div className="child" key={`child-${child.id}`}>
                  <div className="role">{child.role}</div>
                  <div className="name">{child.first_name}</div>
                  {child.birthday && (
                    <div className="phone_number">{child.birthday}</div>
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
      >
        <h5>Сім'я</h5>
        <h5>Останнiй вiзит</h5>
      </TableHeader>
      <div className="families_content">
        {renderData.length !== 0 && render(renderData)}
      </div>
    </>
  );
}
