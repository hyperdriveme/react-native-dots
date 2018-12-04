/**
 * @author Luke Brandon Farrell
 * @description
 */

/* NPM - Node Package Manage */
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

/**
 * Renders a dot ellipsis, either active or not.
 *
 * @param active
 * @param style
 * @param activeStyle
 *
 * @return {jsx}
 */
const Dot = ({ active, style, activeStyle }) => {
  /** Styles */
  const { dotDefaultStyle, dotActiveStyle } = styles;
  /** Variables */
  const dotStyle = active
    ? [dotDefaultStyle, style, dotActiveStyle, activeStyle]
    : [dotDefaultStyle, style];

  return <View style={dotStyle} />;
};

Dot.propTypes = {
  active: PropTypes.bool.isRequired,
  style: PropTypes.any,
  activeStyle: PropTypes.any
};

export default Dot;

/** -------------------------------------------- */
/**             Component Styling                */
/** -------------------------------------------- */
const styles = StyleSheet.create({
  dotDefaultStyle: {
    width: 12,
    height: 12,
    marginRight: 8,
    marginLeft: 8,
    borderRadius: 9,
    opacity: 0.45,
    backgroundColor: "#EE2B7B"
  },
  dotActiveStyle: {
    opacity: 1.0
  }
});
