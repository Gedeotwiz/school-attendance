
export interface IStudent {
  id: string;
  names: string;
  email: string;
  phone: string;
  gender: "Male" | "Female";
  sittingLocation?: string;
  status: "Active" | "Inactive";
  avator?: string;
}