import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeName, ThemeUnits } from './types';
import { getTheme } from './getTheme';
import { getGlobalStyle } from './globalStyle';

export function getThemeProvider(themeName: ThemeName, units: ThemeUnits) {
  return ({ children }: PropsWithChildren): JSX.Element => {
    const GlobalStyle = getGlobalStyle(units);
    const theme = getTheme(themeName, units);
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        {children}
      </ThemeProvider>
    );
  };
}
