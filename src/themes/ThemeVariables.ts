import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  palette: {
    primary: {
      softCyan: 'hsl(174, 77%, 80%)',
      strongCyan: 'hsl(174, 86%, 45%)',
      lightGrayishRed: 'hsl(14, 92%, 95%)',
      lightRed: '#9d553c',
      paleBlue: 'hsl(226, 100%, 87%)',
    },
    neutral: {
      white: 'hsl(100, 100%, 100%)',
      veryPaleBlue: 'hsl(230, 100%, 99%)',
      lightGrayishBlue: 'hsl(224, 65%, 95%)',
      lightGrayishBlueBackground: 'hsl(223, 50%, 87%)',
      grayishBlue: '#6b728b',
      darkDesaturatedBlue: 'hsl(227, 35%, 25%)',
    },
  },
  mediaSize: {
    s: '576px',
    md: '768px',
    lg: '992px',
    xlg: '1200px',
  },
};

export { myTheme };