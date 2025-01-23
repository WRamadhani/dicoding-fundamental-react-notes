import PropTypes from "prop-types";

function Button({ label, type, isButton = true, icon, onClick }) {
  return (
    <button
      className={"btn " + type}
      type={isButton ? "button" : "submit"}
      onClick={onClick}
    >
      {icon ? <span className={"btn--icon"}>{icon}</span> : ''}
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  isButton: PropTypes.bool,
  icon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
