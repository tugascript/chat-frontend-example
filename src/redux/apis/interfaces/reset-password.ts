import type { IPasswords } from "./passwords-interface";

export interface IResetPassword extends IPasswords {
  resetToken: string;
}
