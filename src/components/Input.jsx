function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onInput,
  onChange,
  isRequired = false,
}) {
  return (
    <div className="form__input">
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onInput={onInput}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
