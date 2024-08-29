import React from "react";
import PropTypes from "prop-types";

function Layout(props) {
  console.log(props);
  return <div className="layout">{props.children}</div>;
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Layout;
