import PropTypes from "prop-types";
import { useContext } from "react";

import LocaleContext from "../context/LocaleContext";
import __Text from "../utils/enTranslation";

function PageHeading({ heading }) {
  const { locale } = useContext(LocaleContext);

  return <h2 className="page__heading">{__Text(locale, heading)}</h2>;
}

PageHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default PageHeading;
