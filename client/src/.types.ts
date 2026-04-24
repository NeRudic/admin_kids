import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ReactNode } from "react";

export type Void = () => void;

// Groupper

export interface IGroupper {
  id: number;
  name: string;
  role: string;
  [key: string]: number | string | undefined | {};
}

export interface IGrouppedFamily {
  familyName: string;
  adults: Record<string, IGroupper[]>;
  children: {
    [key: string]: IGroupper[];
  };
}

// Family

export interface IAdults extends IGroupper {
  phone?: string | undefined;
}

export interface IChildren extends IGroupper {
  birthDate: string;
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

// React Children

export interface ChildrenInterface {
  children: ReactNode;
}

// DTO

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
