import { useState } from "react";
import Dropdown from "../Components/Dropdown";
import {
  financialDamageOptions,
  reputationDamageOptions,
  nonComplianceOptions,
  privacyViolationOptions,
} from "../data";

const initialBusinessImpactFactorsFactors = {
  financialDamage: 0,
  reputationDamage: 0,
  nonCompliance: 0,
  privacyViolation: 0,
  // ... other factors
};

const BusinessImpactFactorsCalculator = ({
  onUpdate,
}: {
  onUpdate: Function;
}) => {
  const [factors, setFactors] = useState(initialBusinessImpactFactorsFactors);

  // Update factor state
  const handleFactorChange = (factor: string, value: number) => {
    setFactors((prevFactors) => ({
      ...prevFactors,
      [factor]: parseInt(value.toString()),
    }));
  };

  const calculateRisk = () => {
    onUpdate(
      (factors.financialDamage +
        factors.reputationDamage +
        factors.nonCompliance +
        factors.privacyViolation) /
        4
    );
    return (
      (factors.financialDamage +
        factors.reputationDamage +
        factors.nonCompliance +
        factors.privacyViolation) /
      4
    );
  };

  return (
    <div className="rating-calculator">
      <h3>Business Impact Factors</h3>

      {/* Threat Agent Factors */}
      <Dropdown
        label="Financial Damage"
        options={financialDamageOptions}
        value={factors.financialDamage}
        onChange={(value: number) =>
          handleFactorChange("financialDamage", value)
        }
      />
      <Dropdown
        label="Reputation Damage"
        options={reputationDamageOptions}
        value={factors.reputationDamage}
        onChange={(value: number) =>
          handleFactorChange("reputationDamage", value)
        }
      />
      <Dropdown
        label="Non-Compliance"
        options={nonComplianceOptions}
        value={factors.nonCompliance}
        onChange={(value: number) => handleFactorChange("nonCompliance", value)}
      />
      <Dropdown
        label="Privacy Violation"
        options={privacyViolationOptions}
        value={factors.privacyViolation}
        onChange={(value: number) =>
          handleFactorChange("privacyViolation", value)
        }
      />

      <div className="result">Business Impact Factor: {calculateRisk()}</div>
    </div>
  );
};

export default BusinessImpactFactorsCalculator;
