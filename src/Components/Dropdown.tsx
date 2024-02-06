

const Dropdown = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: number; label: string }[];
  value: any;
  onChange: Function;
}) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select
        title={label + "_dropdownSelect"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
