import { NewFamilyInterface } from "../.types";
import { IGroupper, IGrouppedFamily } from "../.types";

const groupper = (personArr: IGroupper[]): Record<string, IGroupper[]> =>
  personArr.reduce<Record<string, IGroupper[]>>((acc, person) => {
    return {
      ...acc,
      [person.role]: [...(acc[person.role] || []), { ...person }],
    };
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
