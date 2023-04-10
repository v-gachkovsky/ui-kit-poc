export type ThemeName = 'default' | 'corteva';
export type ThemeUnits = 'px' | 'rem';

export type Color =
  | '#FF0000'
  | '#8BC543'
  | '#BBDD91'
  | '#FFAE22'
  | '#FFBE33'
  | '#DBEDC5'
  | '#FFFFFF'
  | '#EEEEEE'
  | '#CCCCCC'
  | '#AAAAAA'
  | '#777777'
  | '#666666';

export interface IColors {
  white: Color;
  red: Color;
  yellowGreen: {
    extraLight: Color;
    light: Color;
    normal: Color;
  };
  orange: {
    light: Color;
    normal: Color;
  };
  grey: {
    extraLight: Color;
    light: Color;
    normal: Color;
    dark: Color;
    extraDark: Color;
  };
}

interface IButtonTheme {
  main: {
    backgroundColor: Color;
    color: Color;
  };
  hover: {
    backgroundColor: Color;
    color: Color;
  };
  click: {
    backgroundColor: Color;
    color: Color;
  };
  disabled: {
    backgroundColor: Color;
    color: Color;
  };
}

export type FonsSizesPX = {
  0.8: '8px';
  1.1: '11px';
  1.4: '14px';
  1.5: '15px';
  1.8: '18px';
  2.0: '20px';
  2.2: '22px';
};

export type FontSizesREM = {
  0.8: '0.8rem';
  1.1: '1.1rem';
  1.4: '1.4rem';
  1.5: '1.5rem';
  1.8: '1.8rem';
  2.0: '2.0rem';
  2.2: '2.2rem';
};

interface ILinkTheme {
  main: Color;
  hover: Color;
  click: Color;
}

interface IBorderTheme {
  color: Color;
  weight: string;
  radius: string;
  border: string;
}

export interface ITheme {
  units: ThemeUnits;
  colors: IColors;
  backgroundColor: {
    primary: Color;
    secondary: Color;
    contrast: Color;
  };
  font: {
    family: {
      text: string;
    };
    size: FonsSizesPX | FontSizesREM;
    weight: {
      4: 400;
      6: 600;
      7: 700;
    };
    color: {
      primary: Color;
      secondary: Color;
      contrast: Color;
      danger: Color;
    };
  };
  button: {
    primary: IButtonTheme;
    secondary: IButtonTheme;
  };
  checkbox: {
    color: {
      main: Color;
      disabled: Color;
    };
    backgroundColor: {
      main: Color;
      disabled: Color;
    };
  };
  link: {
    primary: ILinkTheme;
    secondary: ILinkTheme;
  };
  breadcrumbs: {
    separator: {
      color: Color;
    };
  };
  select: {
    primary: {
      border: {
        border: string;
        radius: string;
      };
    };
    secondary: {
      border: {
        border: string;
        radius: string;
      };
    };
    backgroundColor: Color;
    zIndex: number;
  };
  border: {
    primary: IBorderTheme;
    secondary: IBorderTheme;
  };
  popup: {
    zIndex: number;
  };
  tooltip: {
    boxShadow: string;
    zIndex: number;
  };
}
