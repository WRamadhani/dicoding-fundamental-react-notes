import PropTypes from "prop-types";

import Panel from "./Panel";

function Skeleton({ repeat = 1 }) {
  return (
    <div
      style={{
        marginInline: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {Array(repeat)
        .fill()
        .map((_, index) => (
          <Panel key={index}>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div className="skeleton__panel">
                <div className="skeleton__shimmer"></div>
              </div>
              <div className="skeleton__panel">
                <div className="skeleton__shimmer"></div>
              </div>
              <div className="skeleton__panel">
                <div className="skeleton__shimmer"></div>
              </div>
            </div>
          </Panel>
        ))}
    </div>
  );
}

Skeleton.propTypes = {
  repeat: PropTypes.number.isRequired,
};

export default Skeleton;
