import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ReactNode } from "react";

export type Void = () => void;

export interface IAdults {
  id: number;
  name: string;
  phone?: string | undefined;
  role: string;
}

export interface IChildren {
  id: number;
  name: string;
  birthDate: string;
  role: string;
}

export interface NewFamilyInterface {
  familyName: string;
  adults: IAdults[];
  children: IChildren[];
  [key: string]: string | number | IAdults[] | IChildren[] | undefined;
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
  phone?: string | undefined;
  role: string;
}

export interface ChildrenDTO {
  id: number;
  name: string;
  birthDate: string;
  role: string;
}

export interface FamiliesDTO {
  data: {
    families: {
      familyName: string;
      created_at?: string;
      updated_at?: string;

      adults: AdultsDTO[];
      children: ChildrenDTO[];
    }[];
  };
}
