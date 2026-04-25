import TableHeader from "../components/Table/TableHeader/TableHeader";
import { useEffect, useState } from "react";
import { IGrouppedFamily } from "../.types";
import { familyDataPreparer } from "../services/families.data.utils";

export default function Families() {
  const [inputValue, setInputValue] = useState("");
  const [renderData, setRenderData] = useState<IGrouppedFamily[]>();

  const dataNotifier = async (inputValue: string) => {
    const preparedData = await familyDataPreparer(inputValue);
    setRenderData(preparedData);
  };

  useEffect(() => {
    dataNotifier("");
  }, []);

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
      <div className="families_content"></div>
    </>
  );
}
