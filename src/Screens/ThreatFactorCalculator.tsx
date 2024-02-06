import { useState } from "react";
import Dropdown from "../Components/Dropdown";
import {
  motiveOptions,
  opportunityOptions,
  sizeOptions,
  skillLevelOptions,
} from "../data";

const initialThreatAgentFactors = {
  skillLevel: 0,
  motive: 0,
  opportunity: 0,
  size: 0,
  // ... other factors
};

const ThreatFactorsCalculator = ({ onUpdate }: { onUpdate: Function }) => {
  const [factors, setFactors] = useState(initialThreatAgentFactors);

  // Update factor state
  const handleFactorChange = (factor: string, value: number) => {
    setFactors((prevFactors) => ({
      ...prevFactors,
      [factor]: parseInt(value.toString()),
    }));
  };

  const calculateRisk = () => {
    onUpdate(
      (factors.motive +
        factors.opportunity +
        factors.size +
        factors.skillLevel) /
        4
    );
    return (
      (factors.motive +
        factors.opportunity +
        factors.size +
        factors.skillLevel) /
      4
    );
  };

  return (
    <div className="rating-calculator">
      <h3>Threat Agent Factors</h3>

      {/* Threat Agent Factors */}
      <Dropdown
        label="Skill Level"
        options={skillLevelOptions}
        value={factors.skillLevel}
        onChange={(value: number) => handleFactorChange("skillLevel", value)}
      />
      <Dropdown
        label="Motive"
        options={motiveOptions}
        value={factors.motive}
        onChange={(value: number) => handleFactorChange("motive", value)}
      />
      <Dropdown
        label="Opportunity"
        options={opportunityOptions}
        value={factors.opportunity}
        onChange={(value: number) => handleFactorChange("opportunity", value)}
      />
      <Dropdown
        label="Size"
        options={sizeOptions}
        value={factors.size}
        onChange={(value: number) => handleFactorChange("size", value)}
      />

      <div className="result">Threat Agent Factor: {calculateRisk()}</div>
    </div>
  );
};

export default ThreatFactorsCalculator;
