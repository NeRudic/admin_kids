import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Dispatch, ReactNode, SetStateAction } from "react";

// Groupper

export interface IGroupper {
  id?: number;
  first_name: string;
  role: string | null;
  [key: string]: number | string | undefined | {} | null;
}

export interface IGrouppedFamily {
  familyName: string;
  adults: Record<string, IGroupper[]>;
  children: Record<string, IGroupper[]>;
}

// Family

export interface IAdults extends IGroupper {
  phone?: string | undefined;
}

export interface IChildren extends IGroupper {
  birthday: string;
}

export interface NewFamilyInterface {
  familyName: string;
  family_id?: number;
  adults: IAdults[];
  children: IChildren[];
  [key: string]: string | number | IAdults[] | IChildren[] | undefined;
}

// React Hook Form Fields

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

// Void

export type Void = () => void;

// DTO

export interface FamiliesDTO {
  data: {
    families: {
      familyName: string;
      created_at?: string;
      updated_at?: string;

      adults: IAdults[];
      children: IChildren[];
    }[];
  };
}

// Table Header

export interface ITableHeader extends ChildrenInterface {
  button_label?: string;
  placeholder: string;
  dataNotifier: (value: string) => void;
  state: {
    inputValue: string;
    setInputValue: (value: string) => void;
  };
}
