import { NewFamilyInterface } from "../.types";

interface IGroupper {
  id: number;
  name: string;
  role: string;
  [key: string]: number | string | undefined | {};
}

const groupper = (personArr: IGroupper[]): Record<string, IGroupper[]> =>
  personArr.reduce<Record<string, IGroupper[]>>((acc, person) => {
    return {
      ...acc,
      [person.role]: [...(acc[person.role] || []), { ...person }],
    };
  }, {});

// export const groupByRole = (mappedData: NewFamilyInterface[]) => {
//   return mappedData.reduce((acc, family) => {
//     const droupped = groupper(family);
//     return {
//       ...acc,
//       ...groupped,
//     };
//   }, {});
// };
