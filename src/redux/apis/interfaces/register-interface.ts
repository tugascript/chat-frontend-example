import { IPasswords } from "./passwords-interface";

export interface IRegister extends IPasswords {
  name: string;
  email: string;
}
