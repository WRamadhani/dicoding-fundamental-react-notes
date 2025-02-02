import PropTypes from "prop-types";

function Panel({ children }) {
  return <div className="panel">{children}</div>;
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
