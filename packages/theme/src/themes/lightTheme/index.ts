import { ITheme, ThemeUnits } from '../../types';

import { colors } from '../../colors';
import { border, borderRadius, boxShadow, fontSizes } from './constants';

export const getLightTheme = (units: ThemeUnits): ITheme => ({
  units,
  colors,
  backgroundColor: {
    primary: colors.white,
    secondary: colors.grey.extraLight,
    contrast: colors.yellowGreen.normal
  },
  font: {
    family: {
      text: 'Source Sans Pro, serif'
    },
    size: fontSizes[units],
    weight: {
      4: 400,
      6: 600,
      7: 700
    },
    color: {
      primary: colors.grey.extraDark,
      secondary: colors.yellowGreen.normal,
      contrast: colors.white,
      danger: colors.orange.normal
    }
  },
  button: {
    primary: {
      main: {
        backgroundColor: colors.yellowGreen.normal,
        color: colors.white
      },
      hover: {
        backgroundColor: colors.yellowGreen.light,
        color: colors.white
      },
      click: {
        backgroundColor: colors.yellowGreen.light,
        color: colors.white
      },
      disabled: {
        backgroundColor: colors.yellowGreen.extraLight,
        color: colors.white
      }
    },
    secondary: {
      main: {
        backgroundColor: colors.grey.light,
        color: colors.white
      },
      hover: {
        backgroundColor: colors.grey.extraLight,
        color: colors.white
      },
      click: {
        backgroundColor: colors.grey.extraLight,
        color: colors.white
      },
      disabled: {
        backgroundColor: colors.grey.extraLight,
        color: colors.white
      }
    }
  },
  link: {
    primary: {
      main: colors.yellowGreen.normal,
      hover: colors.yellowGreen.light,
      click: colors.yellowGreen.light
    },
    secondary: {
      main: colors.grey.normal,
      hover: colors.grey.normal,
      click: colors.grey.normal
    }
  },
  checkbox: {
    color: {
      main: colors.grey.dark,
      disabled: colors.grey.light
    },
    backgroundColor: {
      main: colors.white,
      disabled: colors.grey.extraLight
    }
  },
  breadcrumbs: {
    separator: {
      color: colors.grey.normal
    }
  },
  select: {
    primary: {
      border: {
        border: `${border[units]} solid ${colors.grey.light}`,
        radius: borderRadius[units]
      }
    },
    secondary: {
      border: {
        border: `${border[units]} solid ${colors.grey.extraDark}`,
        radius: '0'
      }
    },
    backgroundColor: colors.white,
    zIndex: 2
  },
  border: {
    primary: {
      color: colors.grey.light,
      weight: border[units],
      border: `${border[units]} solid ${colors.grey.light}`,
      radius: borderRadius[units]
    },
    secondary: {
      color: colors.grey.extraDark,
      weight: border[units],
      border: `${border[units]} solid ${colors.grey.extraDark}`,
      radius: '0'
    }
  },
  popup: {
    zIndex: 3
  },
  tooltip: {
    boxShadow: `${boxShadow[units]} ${colors.grey.extraLight}`,
    zIndex: 1
  }
});
