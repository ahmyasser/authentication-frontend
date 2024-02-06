import { useState } from "react";
import Dropdown from "../Components/Dropdown";
import {
  lossOfConfidentialityOptions,
  lossOfIntegrityOptions,
  lossOfAvailabilityOptions,
  lossOfAccountabilityOptions,
} from "../data";

const initialTechnicalImpactFactors = {
  lossOfConfidentiality: 0,
  lossOfIntegrity: 0,
  lossOfAvailability: 0,
  lossOfAccountability: 0,
  // ... other factors
};

const TechnicalImpactCalculator = ({ onUpdate }: { onUpdate: Function }) => {
  const [factors, setFactors] = useState(initialTechnicalImpactFactors);

  // Update factor state
  const handleFactorChange = (factor: string, value: number) => {
    setFactors((prevFactors) => ({
      ...prevFactors,
      [factor]: parseInt(value.toString()),
    }));
  };

  const calculateRisk = () => {
    onUpdate(
      (factors.lossOfConfidentiality +
        factors.lossOfIntegrity +
        factors.lossOfAvailability +
        factors.lossOfAccountability) /
        4
    );
    return (
      (factors.lossOfConfidentiality +
        factors.lossOfIntegrity +
        factors.lossOfAvailability +
        factors.lossOfAccountability) /
      4
    );
  };

  return (
    <div className="rating-calculator">
      <h3>Technical Impact Calculator</h3>

      {/* Threat Agent Factors */}
      <Dropdown
        label="Loss Of Confidentiality"
        options={lossOfConfidentialityOptions}
        value={factors.lossOfConfidentiality}
        onChange={(value: number) =>
          handleFactorChange("lossOfConfidentiality", value)
        }
      />
      <Dropdown
        label="Loss Of Integrity"
        options={lossOfIntegrityOptions}
        value={factors.lossOfIntegrity}
        onChange={(value: number) =>
          handleFactorChange("lossOfIntegrity", value)
        }
      />
      <Dropdown
        label="Loss Of Availability"
        options={lossOfAvailabilityOptions}
        value={factors.lossOfAvailability}
        onChange={(value: number) =>
          handleFactorChange("lossOfAvailability", value)
        }
      />
      <Dropdown
        label="Loss Of Accountability"
        options={lossOfAccountabilityOptions}
        value={factors.lossOfAccountability}
        onChange={(value: number) =>
          handleFactorChange("lossOfAccountability", value)
        }
      />

      <div className="result">Technical Impact Factor: {calculateRisk()}</div>
    </div>
  );
};

export default TechnicalImpactCalculator;
