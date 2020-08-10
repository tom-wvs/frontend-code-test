import { darken, lighten } from 'polished';

const secondary = '#FEC601';
const secondaryLight = lighten(0.7, secondary);
const secondaryHover = darken(0.05, secondary);
const primary = '#2364AA';
const primaryLight = lighten(0.3, primary);
const primaryHover = darken(0.15, primary);
const white = '#ffffff';
const lightGrey = '#efefef';
const mediumGrey = '#dedede';
const darkGrey = '#333333';

const colours = {
  primary: primary,
  primaryLight: primaryLight,
  primaryHover: primaryHover,
  secondary: secondary,
  secondaryLight: secondaryLight,
  secondaryHover: secondaryHover,
  white: white,
  lightGrey: lightGrey,
  mediumGrey: mediumGrey,
  darkGrey: darkGrey,
};

const layout = {
  maxWidth: '1200px',
  gutter: { sm: `25px`, md: `25px`, lg: `50px` },
};

export const theme = {
  colours,
  layout,
};
