import SocialIcons from "./SocialIcons";
import { Container } from "./Styles/Container.styled";
import { Flex } from "./Styles/FLex.styled";
import { StyledFooter } from "./Styles/Footer.styled";
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo.svg" alt="" />
        <Flex>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>+1-542-123-4556</li>
            <li>contact@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy;2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
