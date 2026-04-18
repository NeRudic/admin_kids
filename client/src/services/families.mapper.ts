import TableSingleItem from "../components/Table/SingleTableItem/TableSingleItem";
import { NewFamilyInterface, FamilyDTO } from "../.types";

export default function familiesMapper(
  response: FamilyDTO,
): NewFamilyInterface[] {
  return response.data.family.map((family) => ({
    familyName: family.familyName,
    adults: family.adults.map((adult) => ({
      id: adult.id,
      name: adult.name,
      roleId: adult.roleId,
      phone: adult.phone || "",
    })),
    children: family.children.map((child) => ({
      id: child.id,
      name: child.name,
      birthDate: child.birthDate,
      roleId: child.roleId,
    })),
  }));
}
