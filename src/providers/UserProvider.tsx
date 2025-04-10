import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { User } from "../types";

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = useCallback((name: string, email: string) => {
    setUser({ name, email });
  }, []);
  const logout = useCallback(() => {
    setUser(null);
  }, []);
  const value = useMemo(() => ({ user, login, logout }), [user, login, logout]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
