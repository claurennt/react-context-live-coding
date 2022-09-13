import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [me, setMe] = useState(null);

  const login = () =>
    setMe({ username: "claudia", email: "claudia@wbs.com", admin: true });
  return (
    <UserContext.Provider value={{ me, login }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, useUserContext };
