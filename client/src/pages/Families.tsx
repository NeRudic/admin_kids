import { findFamilies } from "../services/api/findFamilies";
import TableHeader from "../components/Table/TableHeader/TableHeader";
import familiesMapper from "../services/families.mapper";

export default function Families() {
  const dataNotifier = (data: string) => {
    findFamilies(data);
  };

  return (
    <>
      <TableHeader placeholder="Введiть сiм'ю" dataNotifier={dataNotifier}>
        <h5>Сім'я</h5>
        <h5>Останнiй вiзит</h5>
      </TableHeader>
    </>
  );
}
