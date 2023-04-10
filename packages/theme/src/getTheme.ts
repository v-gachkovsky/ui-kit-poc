import { getLightTheme } from './themes/lightTheme';
import { ITheme, ThemeName, ThemeUnits } from './types';

export const getTheme = (themeName: ThemeName, units: ThemeUnits): ITheme => {
  if (themeName === 'corteva') {
    return getLightTheme(units);
  }
  return getLightTheme(units);
};
