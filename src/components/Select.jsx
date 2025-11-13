export const Select = ({
  label,
  defaultVal,
  id,
  name,
  value,
  onChange,
  error,
  options,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultVal && (
          <option value="" hidden>
            {defaultVal}
          </option>
        )}

        {/* <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option> */}
        {options.map((op) => (
          <option key={crypto.randomUUID()} value={op}>
            {op}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};
