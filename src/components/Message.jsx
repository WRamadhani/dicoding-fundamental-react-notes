import { useContext } from "react";
import PropTypes from "prop-types";

import __Text from "../utils/enTranslation";
import LocaleContext from "../context/LocaleContext";

function Message({ status, message, onClick }) {
  const { locale } = useContext(LocaleContext);

  return (
    <div className={"message " + status} onClick={onClick}>
      <p>{__Text(locale, message)}</p>
      <span>&times;</span>
    </div>
  );
}

Message.propTypes = {
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Message;
