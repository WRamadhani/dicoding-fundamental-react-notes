import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Button({
  label,
  type,
  icon,
  isSubmit = false,
  funcParams,
  onClick,
  redirect = "",
  isDisable = false,
}) {
  const navigate = useNavigate();
  return (
    <button
      className={type}
      type={isSubmit ? "submit" : "button"}
      onClick={() => {
        onClick(funcParams);
        navigate(redirect);
        // console.log("clicked");
      }}
      disabled={isDisable}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.element,
  isSubmit: PropTypes.bool,
  funcParams: PropTypes.object,
  onClick: PropTypes.func,
  redirect: PropTypes.string,
  isDisable: PropTypes.bool,
};

export default Button;
