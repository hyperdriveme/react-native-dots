/**
 * @author Luke Brandon Farrell
 * @description
 */

/* NPM - Node Package Manage */
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Dot from "./Dot";

/**
 * Renders X number of dots and sets them as active depending on index
 *
 * @param number
 * @param index
 * @param containerStyle
 * @param dotStyle
 * @param dotActiveStyle
 *
 * @return {jsx}
 */
const Dots = ({ number, index, containerStyle, dotStyle, dotActiveStyle }) => {
  /** Styles */
  const { containerDefaultStyle } = styles;
  /** Variables */
  const pins = [];

  for (let i = 0; i < number; i++) {
    pins.push(
      <Dot
        key={i}
        style={dotStyle}
        activeStyle={dotActiveStyle}
        active={i <= index}
      />
    );
  }

  return <View style={[containerDefaultStyle, containerStyle]}>{pins}</View>;
};

Dots.propTypes = {
  number: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  containerStyle: PropTypes.any,
  dotStyle: PropTypes.any,
  dotActiveStyle: PropTypes.any
};

export default Dots;

/** -------------------------------------------- */
/**             Component Styling                */
/** -------------------------------------------- */
const styles = StyleSheet.create({
  containerDefaultStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
