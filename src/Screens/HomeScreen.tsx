import { useState } from "react";
import { useScreen } from "../Contexts/ScreenContext";
import BusinessImpactFactorsCalculator from "./BusinessImpactFactorsCalculator";
import TechnicalImpactCalculator from "./TechnicalImpactFactorsCalculator";
import ThreatFactorCalculator from "./ThreatFactorCalculator";
import VulnerabilityCalculator from "./VulnerabilityFactorCalculator";

function Home() {
  const { user, changeUser } = useScreen();

  const [b, setB] = useState(0);
  const [tech, setTech] = useState(0);
  const [threat, setThreat] = useState(0);
  const [v, setV] = useState(0);

  return (
    <div className="App-header">
      <div>
        <h2>hi {user} </h2>
        <button
          type="submit"
          onClick={() => {
            changeUser(null);
          }}
        >
          Sign Out
        </button>
      </div>
      <div className="flex">
        <ThreatFactorCalculator onUpdate={setThreat} />
        <VulnerabilityCalculator onUpdate={setV} />
        <TechnicalImpactCalculator onUpdate={setTech} />
        <BusinessImpactFactorsCalculator onUpdate={setB} />
      </div>

      <div className="flex w-full">
        <span className="result">Likelihoood Factor: {threat / 2 + v / 2}</span>
        <span className="result">Impact Factor: {tech / 2 + b / 2}</span>
      </div>
    </div>
  );
}

export default Home;
