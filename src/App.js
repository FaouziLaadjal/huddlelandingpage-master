import { Container } from "./Components/Styles/Container.styled";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Styles/Globals";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container></Container>
      </>
    </ThemeProvider>
  );
}

export default App;
