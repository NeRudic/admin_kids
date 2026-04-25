import { NewFamilyInterface } from "../.types";
import { IGroupper, IGrouppedFamily } from "../.types";
import { findFamilies } from "./api/findFamilies";
import familiesMapper from "./families.mapper";

const groupper = (personArr: IGroupper[]): Record<string, IGroupper[]> =>
  personArr.reduce<Record<string, IGroupper[]>>((acc, person) => {
    if (person.role !== null) {
      return {
        ...acc,
        [person.role]: [...(acc[person.role] || []), { ...person }],
      };
    } else {
      console.error("[Groupper]: person.role = null");
      return {
        ...acc,
      };
    }
  }, {});

export const groupByRole = (
  mappedData: NewFamilyInterface[],
): IGrouppedFamily[] => {
  return mappedData.map((val) => {
    return {
      familyName: val.familyName,
      adults: groupper(val.adults),
      children: groupper(val.children),
    };
  });
};

export const familyDataPreparer = async (data: string) => {
  const rawData = await findFamilies(data);
  if (rawData) {
    const mappedData = familiesMapper(rawData);
    return groupByRole(mappedData);
  }
};
