import {
  Checkbox,
  extendTheme,
  withDefaultVariant,
  mode,
  StyleFunctionProps,
} from "@chakra-ui/react";

const globalBorderRadius = "40px";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "purple.100",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: globalBorderRadius,
      },
    },
  },
};

const focusRing = {
  _focus: {
    ring: 2,
    ringColor: "blue.200",
  },
};

const buttonStyles = {
  variants: {
    primary: (props: StyleFunctionProps) => ({
      rounded: "none",
      //backgroundColor: mode("orange.100", "red.400")(props),
      backgroundColor: mode("gray.800", "whiteAlpha.900")(props),
      ...focusRing,
    }),
  },
  baseStyle: {
    borderRadius: globalBorderRadius,
  },
  defaultProps: {
    colorScheme: "blue",
  },
};

const checkboxStyles = {
  baseStyle: {
    control: {
      borderRadius: globalBorderRadius,
      ...focusRing,
    },
  },
};

const customTheme = extendTheme(
  {
    components: {
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Button: { ...buttonStyles },
      Checkbox: { ...checkboxStyles },
    },
  },
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default customTheme;
