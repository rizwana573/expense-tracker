export const Input = ({label, id, name, value, onChange, error}) => {
return (
    <div className="input-container">
        <label htmlFor={name}>{label}</label>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
        <p className="error">{error}</p>
      </div>
)
}