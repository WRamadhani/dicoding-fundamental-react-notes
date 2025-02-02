import { useContext } from "react";
import PropTypes from "prop-types";

import LocaleContext from "../context/LocaleContext";
import __Text from "../utils/enTranslation";
import { Link } from "react-router-dom";

function NotFound({ message }) {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="not__found">
      <h1>{__Text(locale, message)}</h1>
      <p>
        {__Text(locale, "Back to")}{" "}
        <Link to={"/"}>{__Text(locale, "Home")}</Link>
      </p>
    </div>
  );
}

NotFound.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotFound;
