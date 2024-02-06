import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        softCyan: string;
        strongCyan: string;
        lightGrayishRed: string;
        lightRed: string;
        paleBlue: string;
      };
      neutral: {
        white: string;
        veryPaleBlue: string;
        lightGrayishBlue: string;
        lightGrayishBlueBackground: string;
        grayishBlue: string;
        darkDesaturatedBlue: string;
      };
    };
    mediaSize: {
      s: string;
      md: string;
      lg: string;
      xlg: string;
    };
  }
}