import { useContext } from "react";
import { UserAuthContext } from "./UserAuthContextBase";

export function useUserAuth() {
  return useContext(UserAuthContext);
}
