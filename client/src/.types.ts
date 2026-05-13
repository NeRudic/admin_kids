import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ReactNode } from "react";

// Groupper

export interface IGroupper {
  id?: number;
  first_name: string;
  role: string | null;
  roleId?: string;
  // [key: string]: number | string | undefined | {} | null;
}

export interface IGrouppedFamily {
  family_name: string;
  family_id: number;
  adults: IAdults[];
  children: IChildren[];
}

// Family

export interface IAdults extends IGroupper {
  phone_number?: string | undefined;
}

export interface IChildren extends IGroupper {
  birthday: string;
}

// Delete this interface in future!
// export interface NewFamilyInterface {
//   family_name: string;
//   family_id?: number;
//   adults: IAdults[];
//   children: IChildren[];
//   [key: string]: string | number | IAdults[] | IChildren[] | undefined;
// }

// React Hook Form Fields

export interface NewChildAdultInterface {
  index: number;
  register: UseFormRegister<IGrouppedFamily>;
  remove: () => void;
  errors: FieldErrors<IGrouppedFamily>;
}

// Adults/Children Roles

export interface IRole {
  role: string;
  id: number;
}

export interface IRoles {
  adults_roles: IRole[];
  children_roles: IRole[];
}

// React Children

export interface ChildrenInterface {
  children: ReactNode;
}

// Void

export type Void = () => void;

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
