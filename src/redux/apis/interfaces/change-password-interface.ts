import { IPasswords } from "./passwords-interface";

export interface IChangePassword extends IPasswords {
  password: string;
}
