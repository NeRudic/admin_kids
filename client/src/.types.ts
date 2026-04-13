export type Void = () => void;

export interface NewFamilyInterface {
  familyName: string;
  adults: {
    name: string;
    phone: string;
    roleId: number;
  }[];
  children: {
    name: string;
    birthDate: string;
    roleId: number;
  }[];
}
