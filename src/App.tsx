import { myTheme } from "./themes/ThemeVariables";
import { Home } from "./container/Home/Home";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./themes/GlobalStyles";
import Header from "./container/Header/Header";

export const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Header />
      <main>
        <Home />
      </main>
    </ThemeProvider>
  );
};

export default App;
