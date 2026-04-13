import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ReactNode } from "react";

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

export interface NewChildAdultInterface {
  index: number;
  register: UseFormRegister<NewFamilyInterface>;
  remove: () => void;
  errors: FieldErrors<NewFamilyInterface>;
}

export interface ChildrenInterface {
  children: ReactNode;
}
