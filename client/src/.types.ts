import { UseFormRegister, FieldErrors } from "react-hook-form";

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

export interface NewChildInterface {
  index: number;
  register: UseFormRegister<NewFamilyInterface>;
  remove: () => void;
  errors: FieldErrors<NewFamilyInterface>;
}
