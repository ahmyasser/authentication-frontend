import { useScreen } from "../Contexts/ScreenContext";
import logo from "../logo.svg";

function Home() {
  const { user, changeUser } = useScreen();
  return (
    <div className="App-header">
      <h2>hi {user} </h2>
      <p>Welcome to the application.</p>

      <img src={logo} className="App-logo" alt="logo" />
      <br />
      <button
        type="submit"
        onClick={() => {
          changeUser(null);
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Home;
