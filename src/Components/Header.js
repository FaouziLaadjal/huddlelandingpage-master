import { StyleHeader, Nav, Logo, Image } from "./Styles/Header.styled";
import { Button } from "./Styles/Button.styled";
import { Container } from "./Styles/Container.styled";
import { Flex } from "./Styles/FLex.styled";

export default function Header() {
  return (
    <StyleHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa
              quae, explicabo numquam eveniet laudantium tempore natus aliquam
              dolorum excepturi.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/screen-mockups.svg" />
        </Flex>
      </Container>
    </StyleHeader>
  );
}
