import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ReactNode } from "react";

export type Void = () => void;

export interface NewFamilyInterface {
  familyName: string;
  adults: {
    name: string;
    phone: string;
    roleId: number | null;
  }[];
  children: {
    name: string;
    birthDate: string;
    roleId: number | null;
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

export interface AdultsDTO {
  id: number;
  name: string;
  phone?: string;
  roleId: number;
}

export interface ChildrenDTO {
  id: number;
  name: string;
  birthDate: string;
  roleId: number;
}

export interface FamilyDTO {
  data: {
    family: {
      familyName: string;
      created_at?: string;
      updated_at?: string;

      adults: AdultsDTO[];
      children: ChildrenDTO[];
    }[];
  };
}
