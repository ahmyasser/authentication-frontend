import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  ReactNode,
} from "react";
import { SCREENS } from "../Constants";

// Define the context shape
type ScreenContextType = {
  screen: (typeof SCREENS)[keyof typeof SCREENS];
  changeScreen: (screen: (typeof SCREENS)[keyof typeof SCREENS]) => void;
  user: null | string;
  changeUser: (newUser: string | null) => void;
};

// Create the context with a default value
const ScreenContext = createContext<ScreenContextType>({
  screen: SCREENS.SIGNUP, // default value
  changeScreen: () => {}, // empty function as a placeholder
  user: null,
  changeUser: () => {},
});

// Create a custom provider component with the correct types for its props
type ScreenProviderProps = {
  children: ReactNode;
};

export const ScreenProvider: React.FC<ScreenProviderProps> = ({ children }) => {
  const [screen, setScreen] = useState<ScreenContextType["screen"]>(
    SCREENS.SIGNUP
  );
  const [user, setUser] = useState<string | null>(null);

  const changeScreen = useCallback((newScreen: ScreenContextType["screen"]) => {
    setScreen(newScreen);
  }, []);

  const changeUser = useCallback((newUser: string | null) => {
    if(!newUser) setScreen(SCREENS.LOGIN)
    setUser(newUser);
  }, []);

  return (
    <ScreenContext.Provider value={{ screen, changeScreen, user, changeUser }}>
      {children}
    </ScreenContext.Provider>
  );
};

// Custom hook for consuming context
export const useScreen = () => useContext(ScreenContext);

export default ScreenContext;
