import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { ToastContainer } from "react-toastify";

import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";

import { SCREENS } from "./Constants";
import { useScreen } from "./Contexts/ScreenContext";

function App() {
  const { screen } = useScreen();

  const renderScreen = () => {
    switch (screen) {
      case SCREENS.SIGNUP:
        return <SignupScreen />;
      case SCREENS.LOGIN:
        return <LoginScreen />;
      case SCREENS.HOME:
        return <HomeScreen />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">{renderScreen()}</header>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        style={{
          fontSize: "0.8rem",
        }}
      />
    </div>
  );
}

export default App;
