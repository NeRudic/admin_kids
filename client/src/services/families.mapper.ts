import { NewFamilyInterface, FamiliesDTO } from "../.types";

export default function familiesMapper(
  response: FamiliesDTO,
): NewFamilyInterface[] {
  return response.data.families.map((family) => ({
    familyName: family.familyName,
    adults: family.adults.map((adult) => ({
      id: adult.id,
      name: adult.name,
      role: adult.role,
      phone: adult.phone || "",
    })),
    children: family.children.map((child) => ({
      id: child.id,
      name: child.name,
      birthDate: child.birthDate,
      role: child.role,
    })),
  }));
}
