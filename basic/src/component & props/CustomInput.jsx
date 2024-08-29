import React from "react";

import PropTypes from "prop-types";

function CustomInput({ type: TypeInput, ...rest }) {
  return <input {...rest} type={TypeInput} />;
}

CustomInput.propTypes = {
  type: PropTypes.string.isRequired, // yêu cầu type bắt buộc phải có và type phải là string
  onChange: PropTypes.func.isRequired,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
};

export default CustomInput;
