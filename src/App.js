import { Container } from "./Components/Styles/Container.styled";
import Header from "./Components/Header";
import Card from "./Components/Card";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Styles/Globals";
import content from "./content";
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
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
