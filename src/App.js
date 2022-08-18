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
  mobile: "768px",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Container>
          <Header />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
