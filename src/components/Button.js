import React from "react";
import PropTypes from "prop-types";

const Button = ({ id, value, onClick, className }) => (
  <button id={id} onClick={onClick} className={className}>
    {value}
  </button>
);

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;