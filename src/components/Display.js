import React from "react";
import PropTypes from "prop-types";

const Display = ({ value }) => <div id="display" className="display">{String(value)}</div>;

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
