import { useContext } from "react";
import PropTypes from "prop-types";

import LocaleContext from "../context/LocaleContext";
import __Text from "../utils/enTranslation";

function Button({
  label,
  type = "",
  isMobile = false,
  isSubmit = false,
  isDisabled = false,
  icon,
  onClick,
}) {
  const { locale } = useContext(LocaleContext);
  return (
    <button
      className={"btn " + type}
      type={!isSubmit ? "button" : "submit"}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon ? <span className={"btn--icon"}>{icon}</span> : ""}
      <span className={isMobile ? "btn--label mobile" : "btn--label"}>
        {__Text(locale, label)}
      </span>
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  isSubmit: PropTypes.bool,
  isMobile: PropTypes.bool,
  isDisabled: PropTypes.bool,
  icon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
