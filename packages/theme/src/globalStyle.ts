import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components';
import { ITheme, ThemeUnits } from './types';

const globalStyleREM = createGlobalStyle<{theme: ITheme}>`
  html {
    font-size: 10px; // 10px = 1rem;
    font-family: ${({ theme }) => theme.font.family.text};

    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
`;

const globalStylePX = createGlobalStyle<{theme: ITheme}>`
  html {
    font-family: ${({ theme }) => theme.font.family.text};

    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
`;

export function getGlobalStyle(
  units: ThemeUnits
): GlobalStyleComponent<{ readonly theme?: ITheme }, DefaultTheme> {
  if (units === 'rem') {
    return globalStyleREM;
  }
  return globalStylePX;
}
