import PropTypes from "prop-types";
import { useContext } from "react";

import LocaleContext from "../context/LocaleContext";
import __Text from "../utils/enTranslation";

function PageHeading({ children, align = "right", heading }) {
  const { locale } = useContext(LocaleContext);

  if (align === "center") {
    return (
      <div className="heading__container center">
        <h2 className="page__heading">{__Text(locale, heading)}</h2>
        {children}
      </div>
    );
  }

  return (
    <div className="heading__container right">
      <h2 className="page__heading">{__Text(locale, heading)}</h2>
      {children}
    </div>
  );
}

PageHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  align: PropTypes.string,
  children: PropTypes.node,
};

export default PageHeading;
