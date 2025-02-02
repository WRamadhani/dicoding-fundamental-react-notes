import PropTypes from "prop-types";

function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  error,
  onInput,
  onChange,
  isRequired = false,
}) {
  return (
    <div className="form__input">
      {label ? (
        <label htmlFor={name} style={{ marginLeft: "0.2rem" }}>
          {label}
        </label>
      ) : null}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onInput={onInput}
        onChange={onChange}
      />
      <p>{error}</p>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  isRequired: PropTypes.bool,
  onInput: PropTypes.func,
  onChange: PropTypes.func,
};

export default Input;
